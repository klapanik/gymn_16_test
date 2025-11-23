import { useState } from "react";
import { questions } from "../entities/lib/constants";
import { ChooseAnswers } from "../features/ChooseAnswers";
import { useNavigate } from "react-router-dom";
import type { Answer } from "../entities/answer";
import { CorrelationAnswers } from "../features/CorrelationAnswers/CorrelationAnswers";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

export function QuestionsPage() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [points, setPoints] = useState(0);

    const navigate = useNavigate();

    if (questionNumber > 10) {
        navigate('./home');
    }

    // Choose answers
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
    const [isAnswersShown, setIsAnswersShown] = useState(false);

    const handleAnswerClick = (answer: Answer) => {
        if (isAnswersShown) {
            return;
        }

        setSelectedAnswers(prev => {
            const isAlreadySelected = prev.some(item => item.id === answer.id);

            if (isAlreadySelected) {
                return prev.filter(item => item.id !== answer.id);
            } else {
                return [...prev, answer];
            }
        });
    };

    const showHandler = (isCorrect: boolean, answerId: number, background: string = 'white') => {
        const isAlreadySelected = selectedAnswers.some(item => item.id === answerId);
        let styles = ''

        if (isAnswersShown && isAlreadySelected) {
            if (isCorrect) {
                styles += 'bg-[#c8e6c9] border-[#4caf50]'
            } else {
                styles += 'bg-[#ffcdd2] border-[#f44336]'
            }
        } else if (background === 'white') {
            styles += 'bg-white border-white'
        }

        if (isAlreadySelected && !isAnswersShown) {
            styles += 'border-black '
        }

        return styles;
    }

    const nexAnswerHandler = () => {
        setQuestionNumber(prev => prev + 1);

        const amountOfSelectedCorrectAnswers = selectedAnswers.filter(answer =>
            answer.isCorrect
        ).length;

        if (amountOfSelectedCorrectAnswers > 0) {
            setPoints(prev => prev += amountOfSelectedCorrectAnswers);
        }

        setSelectedAnswers([]);
        setIsAnswersShown(false);
    }

    const handleDragEnd = (event: DragEndEvent) => {
        if (isAnswersShown) {
            return;
        }

        const { active, over } = event;

        if (!over) return;

        const answerId = active.id;
        const correctId = over.id;

        const currentAnswer = question.answers.filter(answer =>
            answer.id === answerId
        )[0];

        currentAnswer.dilemmaId = +correctId;

        if (currentAnswer.id == correctId) {
            currentAnswer.isCorrect = true;
        } else {
            currentAnswer.isCorrect = false;
        }

        setSelectedAnswers(prev => [...prev, currentAnswer]);
    }

    const question = questions[questionNumber];

    let answersComponent = <ChooseAnswers
        answers={question.answers}
        handleAnswerClick={handleAnswerClick}
        showHandler={showHandler} />;

    switch (question.questionType) {
        case 'choose':
            answersComponent = <ChooseAnswers
                answers={question.answers}
                handleAnswerClick={handleAnswerClick}
                showHandler={showHandler} />
            break;

        case 'correlativeSide':
            if (!question.dilemmas) {
                nexAnswerHandler();
                break;
            }

            answersComponent = <CorrelationAnswers
                answers={question.answers}
                dilemmas={question.dilemmas}
                showHandler={showHandler}
                type={question.questionType} />
            break;
    }

    console.log(points);

    return (
        <section className={`bg-[url('/images/background/bg1.jpg')] bg-center bg-no-repeat bg-cover
            min-h-screen p-10`}>

            <div className="flex flex-col gap-10">
                <p className="font-semibold text-xl">{question.questionText}</p>
                <DndContext onDragEnd={handleDragEnd}>
                    {answersComponent}
                </DndContext>

                <div>
                    <button onClick={() => setIsAnswersShown(() => selectedAnswers.length ? true : false)} className="primary-button mr-10 border-2 border-black">Показать правильные ответы</button>
                    <button onClick={() => nexAnswerHandler()} className="primary-button border-2 border-black">Перейти к следующему вопросу</button>
                </div>
            </div>
        </section>
    )
}
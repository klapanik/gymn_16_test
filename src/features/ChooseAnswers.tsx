import type { Answer } from "../entities/answer";

type Props = {
    answers: Answer[],
    handleAnswerClick: (answer: Answer) => void,
    showHandler: (isCorrect: boolean, answerId: number) => string
}

export function ChooseAnswers({ answers, handleAnswerClick, showHandler }: Props) {
    return (
        <div className="grid sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-4 px-10 mb-5">
            {answers.map(answer => (
                <button
                    key={answer.id}
                    onClick={() => handleAnswerClick(answer)}
                    className={`ransition-all duration-300 cursor-pointer rounded-2xl py-2 border-2 ${showHandler(answer.isCorrect, answer.id)}`}>
                    {answer.answerText}
                </button>
            ))}
        </div>
    )
}

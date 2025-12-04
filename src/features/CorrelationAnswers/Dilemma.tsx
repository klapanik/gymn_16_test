import { useDroppable } from "@dnd-kit/core";
import type { Dilemma as DilemmaType } from "../../entities/dilemma";
import type { Answer as AnswerType } from "../../entities/answer";
import { Answer } from "./Answer";

type Props = {
    answers: AnswerType[],
    dilemma: DilemmaType,
    type: string,
    showHandler: (isCorrect: boolean, answerId: number, background?: string) => void,
}

export function Dilemma({ dilemma, answers, showHandler, type }: Props) {
    const { setNodeRef } = useDroppable({
        id: dilemma.id
    })

    return (
        <div
            ref={setNodeRef}
            key={dilemma.id}
            className={`bg-white text-white p-2 rounded-2xl text-center flex flex-col ${type === 'correlativeTop' ? '' : 'sm:flex-row'} gap-6 shadow-2xl`}>

            <div className={`${type === 'correlativeSide' ? 'sm:w-[50%] py-2' : 'pt-5'} `}>
                {dilemma.img ? <img src={dilemma.img} alt={dilemma.dilemma} className="h-72 mx-auto" /> : <p className="text-black">{dilemma.dilemma}</p>}
            </div>

            <div className={`py-3 px-2 ${type === 'correlativeSide' ? 'sm:w-[40%]' : ''}`}>
                {answers.map(answer => answer.dilemmaId == dilemma.id ? <Answer answer={answer} showHandler={showHandler} /> : '')}
            </div>
        </div>
    )
}
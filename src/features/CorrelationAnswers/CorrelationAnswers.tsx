import type { Answer as AnswerType } from "../../entities/answer";
import type { Dilemma as DilemmaType } from "../../entities/dilemma";
// import { Answer } from "./Answer";
import { Dilemma } from "./Dilemma";

type Props = {
    answers: AnswerType[],
    dilemmas: DilemmaType[],
    showHandler: (isCorrect: boolean, answerId: number, background?: string) => void,
    type: string
}

export function CorrelationAnswers({ answers, dilemmas, showHandler, type }: Props) {
    return (
        <section className={`${type === 'correlativeTop' ? 'grid grid-cols-4' : 'flex flex-col'} gap-5 mb-10`}>
            {dilemmas.map(dilemma => <Dilemma dilemma={dilemma} answers={answers} showHandler={showHandler} type={type} />)}
        </section>
    )
}
import type { Answer as AnswerType } from "../../entities/answer";
import type { Dilemma as DilemmaType } from "../../entities/dilemma";
import { Dilemma } from "./Dilemma";

type Props = {
    answers: AnswerType[],
    dilemmas: DilemmaType[],
    showHandler: (isCorrect: boolean, answerId: number, background?: string) => void,
    cols: '3' | '4',
    type: string
}

export function CorrelationAnswers({ answers, dilemmas, showHandler, type, cols = '4' }: Props) {
    return (
        <section className={`${type === 'correlativeTop' ? cols === '4' ? 'grid grid-cols-4 ' : 'grid grid-cols-3 ' : 'flex flex-col'} gap-5 mb-10`}>
            {dilemmas.map(dilemma => <Dilemma dilemma={dilemma} answers={answers} showHandler={showHandler} type={type} />)}
        </section>
    )
}
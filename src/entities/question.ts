import type { Answer } from "./answer"

export type Question = {
    questionText: string,
    answers: Answer[],
    questionType: 'choose' | 'correlationSide' | 'correlationTop' | 'sorting' | string
}
import type { Answer } from "./answer"
import type { Dilemma } from "./dilemma"

export type Question = {
    questionText: string,
    answers: Answer[],
    questionType: 'choose' | 'correlationSide' | 'correlationTop' | 'sorting' | string,
    dilemmas?: Dilemma[],
    img?: string,
    cols?: '3' | '4',  
}
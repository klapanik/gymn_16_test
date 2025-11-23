export type Answer = {
    answerText: string,
    isCorrect: boolean,
    id: number,
    dilemmaId?: number,
    correctDilemmaId?: number | number[],
}
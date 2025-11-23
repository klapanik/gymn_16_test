import { useDraggable } from "@dnd-kit/core";
import type { Answer as AnswerType } from "../../entities/answer";

type Props = {
    answer: AnswerType,
    showHandler: (isCorrect: boolean, answerId: number, background?: string) => void,
}

export function Answer({ answer, showHandler }: Props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: answer.id,
    });

    const style = transform
        ? {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
        }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            key={answer.id}
            style={style}
            className={`bg-black cursor-pointer border-2 p-2 mb-2 rounded-2xl mx-auto ${showHandler(answer.isCorrect, answer.id, 'black')}`}>
            {answer.answerText}
        </div>
    )
}
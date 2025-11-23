import type { Question } from "../question";

export const questions: Question[] = [
    {
        questionText: 'Какие из перечисленных принципов одновременно закреплены в Конституции Республики Беларусь и отражают нравственные ценности общества, но при этом могут вступать в противоречие друг с другом в реальной практике?',
        answers: [
            {
                answerText: 'A) Свобода слова',
                isCorrect: true,
                id: 1,
            },
            {
                answerText: 'Б) Защита чести и достоинства',
                isCorrect: true,
                id: 2,
            },
            {
                answerText: 'В) Равенство перед законом',
                isCorrect: false,
                id: 3,
            },
            {
                answerText: 'Г) Право на труд',
                isCorrect: false,
                id: 4,
            },
            {
                answerText: 'Д) Право на тайну личной жизниа',
                isCorrect: false,
                id: 5,
            },
        ],

        questionType: 'choose',
    },

    // 2-4 вопросы

    {
        questionText: 'Какой орган Республики Беларусь имеет право официально толковать Конституцию?',
        answers: [
            {
                answerText: 'A) Верховный Суд',
                isCorrect: false,
                id: 1,
            },
            {
                answerText: 'Б) Конституционный Суд',
                isCorrect: true,
                id: 2,
            },
            {
                answerText: 'В) Совет Министров',
                isCorrect: false,
                id: 3,
            },
            {
                answerText: 'Г)  Палата представителей',
                isCorrect: false,
                id: 4,
            }
        ],

        questionType: 'choose',
    },

    {
        questionText: 'Какие нормы нарушаются в данной ситуации независимо от юридической квалификации?',
        answers: [
            {
                answerText: 'A) Нарушение нравственных норм (популяризация насилия)',
                isCorrect: true,
                id: 1,
            },
            {
                answerText: 'Б) Административная ответственность (за распространение неприемлемого контента)',
                isCorrect: false,
                id: 2,
            },
            {
                answerText: 'В) Уголовная ответственность (если видео содержит признаки преступления)',
                isCorrect: false,
                id: 3,
            }
        ],

        questionType: 'choose',
    },
]
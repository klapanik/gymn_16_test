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
    {
        questionText: 'Соотнесите статью Конституции и правовую дилемму:',
        answers: [
            {
                answerText: 'Ст. 33 → свобода мнений',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Ст. 34 → право на получение информации',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 3
            },
            {
                answerText: 'Ст. 35 → свобода собраний',
                isCorrect: false,
                id: 3,
                dilemmaId: 1,
                correctDilemmaId: 2
            },
            {
                answerText: ' Ст. 59 → обязанность государства защищать права',
                isCorrect: false,
                id: 4,
                dilemmaId: 1,
                correctDilemmaId: 1,
            }
        ],

        dilemmas: [
            {
                dilemma: 'Гражданин требует доступа к закрытой информации о деятельности органов власти',
                id: 1
            },
            {
                dilemma: 'Организаторы массового мероприятия не согласовали мероприятие с местными властями.',
                id: 2
            },
            {
                dilemma: 'Журналист публикует критическую статью, затрагивающую репутацию чиновника.',
                id: 3
            },
            {
                dilemma: 'Суд обязан обеспечить защиту прав гражданина, даже если закон несовершенен',
                id: 4
            },
        ],

        questionType: 'correlativeSide',
    },
    {
        questionText: 'Разделите примеры на «уголовную», «административную», «гражданско‑правовую» и «дисциплинарную» ответственность:',
        answers: [
            {
                answerText: 'Нарушение авторских прав при публикации статьи',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Опоздание на работу',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Мелкое хулиганство',
                isCorrect: false,
                id: 3,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Мошенничество',
                isCorrect: false,
                id: 4,
                dilemmaId: 1,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Неисполнение договора аренды',
                isCorrect: false,
                id: 5,
                dilemmaId: 1,
                correctDilemmaId: 3,
            }
        ],

        dilemmas: [
            {
                dilemma: 'уголовная',
                id: 1,
            },
            {
                dilemma: 'административная',
                id: 2,
            },
            {
                dilemma: 'гражданско-правовая',
                id: 3,
            },
            {
                dilemma: 'дисциплинарная',
                id: 4,
            }
        ],

        questionType: 'correlativeTop',
    },

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
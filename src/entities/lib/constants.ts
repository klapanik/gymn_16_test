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
        questionText: 'Расположите этапы в правильной последовательности:',
        answers: [
            {
                answerText: 'Возможность апелляции',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 5,
            },
            {
                answerText: 'Подготовка дела к судебному разбирательству ',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Исполнение решения суда',
                isCorrect: false,
                id: 3,
                dilemmaId: 1,
                correctDilemmaId: 6,
            },
            {
                answerText: 'Подача искового заявления',
                isCorrect: false,
                id: 4,
                dilemmaId: 2,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Вынесение решения',
                isCorrect: false,
                id: 5,
                dilemmaId: 2,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Рассмотрение дела в суде',
                isCorrect: false,
                id: 6,
                dilemmaId: 2,
                correctDilemmaId: 3,
            }
        ],

        dilemmas: [
            {
                dilemma: 'Этап 1',
                id: 1,
            },
            {
                dilemma: 'Этап 2',
                id: 2,
            },
            {
                dilemma: 'Этап 3',
                id: 3,
            },
            {
                dilemma: 'Этап 4',
                id: 4,
            },
            {
                dilemma: 'Этап 5',
                id: 5,
            },
            {
                dilemma: 'Этап 6',
                id: 6,
            }
        ],

        questionType: 'correlativeSide',
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
    {
        questionText: 'Соотнесите правовые категории и их определения:',
        answers: [
            {
                answerText: 'Противоречие норм',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Отсутствие регулирования',
                isCorrect: false,
                id: 2,
                dilemmaId: 4,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Знание и оценка права',
                isCorrect: false,
                id: 3,
                dilemmaId: 2,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Уровень развития правовых знаний и поведения',
                isCorrect: false,
                id: 4,
                dilemmaId: 3,
                correctDilemmaId: 4,
            }
        ],

        dilemmas: [
            {
                dilemma: 'Коллизия права →',
                id: 1,
            },
            {
                dilemma: 'Пробел в праве →',
                id: 2,
            },
            {
                dilemma: 'Правосознание → ',
                id: 3,
            },
            {
                dilemma: 'Правовая культура →',
                id: 4,
            }
        ],

        questionType: 'correlativeSide',
    },
    {
        questionText: 'Разделите примеры на «права», «обязанности» и «гарантии»:',
        answers: [
            {
                answerText: 'Получать бесплатное образование',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Соблюдать правила внутреннего распорядка',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Государство обеспечивает доступность учебников',
                isCorrect: false,
                id: 3,
                dilemmaId: 2,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Участвовать в школьном самоуправлении',
                isCorrect: false,
                id: 4,
                dilemmaId: 2,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Бережно относиться к имуществу школы',
                isCorrect: false,
                id: 5,
                dilemmaId: 2,
                correctDilemmaId: 2,
            }
        ],

        dilemmas: [
            {
                dilemma: 'Права',
                id: 1,
            },
            {
                dilemma: 'Обязанности',
                id: 2,
            },
            {
                dilemma: 'Гарантии',
                id: 3,
            }
        ],

        questionType: 'correlativeTop',
    },
    {
        questionText: 'Расположите этапы развития правовой системы в логической последовательности:',
        answers: [
            {
                answerText: 'Возникновение обычного права',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Формирование писаных законов',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Создание судебной практики',
                isCorrect: false,
                id: 3,
                dilemmaId: 1,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Развитие конституционного права',
                isCorrect: false,
                id: 4,
                dilemmaId: 1,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Интеграция международных норм',
                isCorrect: false,
                id: 5,
                dilemmaId: 1,
                correctDilemmaId: 5,
            }
        ],

        dilemmas: [
            {
                dilemma: '1',
                id: 1,
            },
            {
                dilemma: '2',
                id: 2,
            },
            {
                dilemma: '3',
                id: 3,
            },
            {
                dilemma: '4',
                id: 4,
            },
            {
                dilemma: '5',
                id: 5,
            }
        ],

        questionType: 'correlativeSide',
    },
    {
        questionText: 'Расположите этапы развития правовой системы в логической последовательности:',
        answers: [
            {
                answerText: 'Департамент охраны МВД',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Следственный комитет',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Министерство внутренних дел',
                isCorrect: false,
                id: 4,
                dilemmaId: 2,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Верховный Суд РБ',
                isCorrect: false,
                id: 3,
                dilemmaId: 2,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Комитет государственной безопасности',
                isCorrect: false,
                id: 5,
                dilemmaId: 2,
                correctDilemmaId: 5,
            },
            {
                answerText: 'Министерство юстиции РБ',
                isCorrect: false,
                id: 6,
                dilemmaId: 3,
                correctDilemmaId: 6,
            }
        ],

        dilemmas: [
            {
                dilemma: '',
                img: '/images/img1.jpg',
                id: 1,
            },
            {
                dilemma: '',
                img: '/images/img2.jpg',
                id: 2,
            },
            {
                dilemma: '',
                img: '/images/img3.jpg',
                id: 3,
            },
            {
                dilemma: '',
                img: '/images/img4.jpg',
                id: 4,
            },
            {
                dilemma: '',
                img: '/images/img5.jpg',
                id: 5,
            },
            {
                dilemma: '',
                img: '/images/img6.jpg',
                id: 6,
            }
        ],

        questionType: 'correlativeTop',
    },
]
import type { Question } from "../question";

export const questions: Question[] = [
    {
        questionText: '1. Какие из перечисленных принципов одновременно закреплены в Конституции Республики Беларусь и отражают нравственные ценности общества, но при этом могут вступать в противоречие друг с другом в реальной практике? (выберете два варианта ответа)',
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
                answerText: 'Д) Право на тайну личной жизни',
                isCorrect: false,
                id: 5,
            },
        ],

        questionType: 'choose',
    },
    {
        questionText: '2. Соотнесите статьи Конституции Республики Беларусь и примеры ситуаций:',
        answers: [
            {
                answerText: 'Ст. 3 - народ является источником власти',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Ст. 4 - демократия и многообразие мнений',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 5,
            },
            {
                answerText: 'Ст. 33 - свобода мнений и выражения',
                isCorrect: false,
                id: 3,
                dilemmaId: 2,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Ст. 34 - право на получение информации',
                isCorrect: false,
                id: 4,
                dilemmaId: 2,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Ст. 59 - обязанность государства защищать права граждан',
                isCorrect: false,
                id: 5,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
        ],

        dilemmas: [
            {
                dilemma: 'Гражданин РБ обращается в ЖЭС, чтобы узнать, как расходуются средства на ремонт дома',
                id: 1
            },
            {
                dilemma: 'Гражданин РБ обращается в милицию, если у него украли телефон',
                id: 2
            },
            {
                dilemma: 'Гражданин РБ ведет блог в соцсетях, где делится своими мыслями о жизни, культуре',
                id: 3
            },
            {
                dilemma: 'Гражданин РБ участвует в выборах депутата, Президента',
                id: 4
            },
            {
                dilemma: 'Гражданин РБ вступает в общественное объединение, политическую партию',
                id: 5
            },
        ],

        questionType: 'correlativeSide',
    },
    {
        questionText: '3. Классифицируйте примеры по видам ответственности: «уголовная», «административная», «гражданско‑правовая» и «дисциплинарная»:',
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
                dilemmaId: 2,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Неисполнение договора аренды',
                isCorrect: false,
                id: 5,
                dilemmaId: 2,
                correctDilemmaId: 3,
            }
        ],

        dilemmas: [
            {
                dilemma: 'Уголовная',
                id: 1,
            },
            {
                dilemma: 'Административная',
                id: 2,
            },
            {
                dilemma: 'Гражданско-правовая',
                id: 3,
            },
            {
                dilemma: 'Дисциплинарная',
                id: 4,
            }
        ],

        questionType: 'correlativeTop',
    },
    {
        questionText: '4. Расположите этапы процесса рассмотрения дела в суде в правильной последовательности:',
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
        questionText: '5. Какой орган Республики Беларусь имеет право официально толковать Конституцию Республики Беларусь?',
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
        questionText: '6. На иллюстрации изображён подросток, который снимает на видео драку и выкладывает её в интернет. Определите, какие нормы нарушаются в данной ситуации, независимо от юридической квалификации?',
        img: '/images/question_six.jpg',
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
        questionText: '7. Соотнесите правовые категории и их определения:',
        answers: [
            {
                answerText: 'Противоречие норм',
                isCorrect: false,
                id: 1,
                dilemmaId: 2,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Отсутствие регулирования',
                isCorrect: false,
                id: 2,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Знание и оценка права',
                isCorrect: false,
                id: 3,
                dilemmaId: 1,
                correctDilemmaId: 3,
            },
            {
                answerText: 'Уровень развития правовых знаний и поведения',
                isCorrect: false,
                id: 4,
                dilemmaId: 2,
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
        questionText: '8. Разделите примеры на «права», «обязанности» и «гарантии» учащихся:',
        answers: [
            {
                answerText: 'Получать бесплатное образование',
                isCorrect: false,
                id: 1,
                dilemmaId: 2,
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
                dilemmaId: 1,
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
        cols: '3',
    },
    {
        questionText: '9. Расположите этапы развития правовой системы в логической последовательности:',
        answers: [
            {
                answerText: 'Формирование писаных законов ',
                isCorrect: false,
                id: 1,
                dilemmaId: 1,
                correctDilemmaId: 4,
            },
            {
                answerText: 'Создание судебной практики ',
                isCorrect: false,
                id: 2,
                dilemmaId: 2,
                correctDilemmaId: 1,
            },
            {
                answerText: 'Интеграция международных норм',
                isCorrect: false,
                id: 3,
                dilemmaId: 1,
                correctDilemmaId: 2,
            },
            {
                answerText: 'Возникновение права, на основе традиций',
                isCorrect: false,
                id: 4,
                dilemmaId: 1,
                correctDilemmaId: 5,
            },
            {
                answerText: 'Развитие конституционного права',
                isCorrect: false,
                id: 5,
                dilemmaId: 2,
                correctDilemmaId: 3,
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
        questionText: '10. Сопоставьте эмблемы государственных структур с их наименованием:',
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
                dilemmaId: 2,
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
                dilemmaId: 1,
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
                img: '/images/img4.png',
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

        cols: '3',
        questionType: 'correlativeTop',
    },
]
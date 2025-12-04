import { useNavigate } from "react-router-dom"
import { localStorageService } from "../services/localStorage";

export function MainPage() {
    const navigate = useNavigate();

    const goToTest = () => { navigate('/test') };

    const points = localStorageService.get('points');

    let comment = '';

    if (points == 0 || points < 10) {
        comment = ''
    } else if (points > 10 && points < 20) {
        comment = 'Вы показали себя, но в некоторых вопросах сделали ошибки. Пройдите тест заново и исправьте их'
    } else if (points > 20 && points < 30) {
        comment = 'Поздравляем!'
    } else if (points > 30) {
        comment = 'Это лучший результат!!!'
    }

    return (
        <section className="bg-[url('/images/background/main_bg.jpg')] 
            bg-center bg-no-repeat bg-cover h-screen text-white p-10">

            <div className="my-auto flex flex-col items-center max-w-150 mx-auto">
                <header className="w-full mb-6">
                    <h1 className="text-2xl font-semibold text-center md:text-4xl sm:text-3xl">Познавательный тест</h1>
                    <h2 className="text-lg text-center md:text-2xl sm:text-xl">«Правовая культура и нормы нравственного поведения»</h2>
                </header>

                <main className="w-full">
                    <ul className="text-md font-normal mb-20 sm:text-lg">
                        <li><p>Государственное учереждение образования «Гимназия № 16 г.Минска»</p></li>
                        <li><p>Центральный район</p></li>
                    </ul>

                    {points
                        ? <div className="mx-auto my-5 text-centre">
                            <p>На прошлом тесте вы набрали {points} балла. {comment}</p>
                        </div>
                        : ''
                    }

                    <div className="flex mx-auto items-center justify-center gap-4">
                        <button
                            onClick={() => goToTest()}
                            type="button"
                            className="primary-button w-50">
                            {points ? 'Пройти тест ещё раз' : 'Перейти к вопросам'}
                        </button>

                        {points
                            ? <button
                                onClick={() => localStorageService.remove('points')}
                                type="button"
                                className="primary-button">
                                Cбросить результат
                            </button>
                            : ''
                        }
                    </div>
                </main>
            </div>

            <footer className="w-full">
                <ul className="mt-10 flex justify-end w-full">
                    <div className="text-end mt-2">
                        <li><p><i>Лапаник Константин Денисович</i></p></li>
                        <li><p>Номер телефона: <a
                            href="tel:+375336768259"
                            className="font-light transition-colors duration-300 
                                hover:text-blue-500">
                            <i>+375-(33)-676-82-59</i>
                        </a></p></li>
                        <li><p>2025 год</p></li>
                    </div>
                </ul>
            </footer>
        </section>
    )
}
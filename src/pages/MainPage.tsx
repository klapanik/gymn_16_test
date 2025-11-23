import { useNavigate } from "react-router-dom"

export function MainPage() {
    const navigate = useNavigate();

    const goToTest = () => { navigate('./test') }

    return (
        <section className="bg-[url('../../public/images/background/main_bg.jpg')] 
            bg-center bg-no-repeat bg-cover h-screen text-white p-10">

            <div className="my-auto flex flex-col items-center max-w-150 mx-auto">
                <header className="w-full mb-6">
                    <h1 className="text-4xl font-semibold text-center">Познавательный тест</h1>
                    <h2 className="text-2xl text-center">«Правовая культура и нормы нравственного поведения»</h2>
                </header>

                <main className="w-full">
                    <ul className="text-lg font-normal mb-11">
                        <li><p>Государственное учереждение образования "Гимназия номер 16"</p></li>
                        <li><p>Центральный район</p></li>
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

                    <button
                        onClick={() => goToTest()}
                        type="button"
                        className="block mx-auto primary-button">
                        Перейти к вопросам
                    </button>
                </main>
            </div>
        </section>
    )
}
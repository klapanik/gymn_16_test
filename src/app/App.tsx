import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { QuestionsPage } from "../pages/Questions";

export function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route index element={<MainPage />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/test" element={<QuestionsPage />} />
        </>
    ));

    return (
        <RouterProvider router={router} />
    )
}

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

export function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route index element={<MainPage />} />
            <Route path="/home" element={<MainPage />} />
        </>
    ));

    return (
        <RouterProvider router={router} />
    )
}

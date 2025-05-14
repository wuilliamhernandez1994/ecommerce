import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, HomePage, ShopPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "shop",
                element: <ShopPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
]);

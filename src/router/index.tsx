import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { RepairPage, MaintenancePage, PartPage } from "../pages";
import { SquarePayment } from "../components/shop/SquarePayment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <MaintenancePage />,
            },
            {
                path: "part",
                element: <PartPage />,
            },
            {
                path: "repair",
                element: <RepairPage />,
            },
            {
                path: "pay",
                element: <SquarePayment />,
            },
        ],
    },
]);

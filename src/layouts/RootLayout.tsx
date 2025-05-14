import { Outlet, useLocation } from "react-router-dom";
import { NavbarComponent } from "../components/shared/NavbarComponent";
import { FooterComponent } from "../components/shared/FooterComponent";

export const RootLayout = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col h-screen">
            <NavbarComponent />
            {pathname === "/" ? (
                <div className="flex-1 bg-gradient-to-b from-gray-100 to-gray-200">
                    <div className="container mx-auto py-8">
                        <h1 className="text-4xl font-bold text-center">
                            Welcome to Our Website
                        </h1>
                        <p className="text-center mt-4">
                            Explore our features and services.
                        </p>
                    </div>
                </div>
            ) : null}
            <main className="flex-1 mx-auto w-full sm:w-11/12 lg:w-4/5">
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};

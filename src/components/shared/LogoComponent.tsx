export const LogoComponent = () => {
    return (
        <>
            <a href="/" className="flex items-center h-full">
                <img
                    src="/logo/logoSmall.svg"
                    className="block md:hidden lg:hidden w-10"
                    alt="Logo"
                />
                <img
                    src="/logo/logoMedium.svg"
                    className="hidden md:block lg:hidden w-30"
                    alt="Logo"
                />
                <img
                    src="/logo/logoLarge.svg"
                    className="hidden lg:block w-55"
                    alt="Logo"
                />
            </a>
        </>
    );
};

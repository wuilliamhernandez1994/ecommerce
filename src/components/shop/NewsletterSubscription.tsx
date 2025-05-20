const NewsletterSubscription = () => {
    return (
        <div className="relative overflow-hidden py-8 lg:py-28 font-nunito">
            <div className="absolute inset-0 z-0">
                <img
                    src="/img/subscr.webp"
                    alt="Fondo acuático"
                    className="w-full h-full"
                />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-0 lg:py-11 mx-auto w-auto sm:mx-[5%] lg:mx-[10%]">
                {/* Contenido de texto */}
                <div className="text-white mb-8 md:mb-0 md:w-1/2 px-3">
                    <p className="text-lg lg:text-3xl font-normal">
                        Subscribe to our Newsletter
                    </p>
                    <p className="text-3xl lg:text-7xl font-bold lg:font-medium mb-5">
                        Stay informed
                    </p>
                    <p className="text-base lg:text-lg font-semibold mb-4">
                        Receive Special offers and stay informed about the
                        latest developments in the world of Water Toys.
                    </p>
                    <p className="text-base lg:text-lg font-normal">
                        In order to understand how we use and protect your
                        personal information, please read our privacy policy.
                    </p>
                </div>

                {/* Formulario */}
                <div className="w-full md:w-5/12 px-3">
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-5 border text-sm bg-gray-200 text-gray-600 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-5 border text-sm bg-gray-200 text-gray-600 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            className="p-5 border text-sm bg-gray-200 text-gray-600 w-full"
                        />

                        <a
                            href=""
                            className="flex items-center justify-center text-sm font-semibold py-4 px-8 mb-2.5 [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] bg-yellow-500 hover:bg-yellow-600 text-black w-full"
                        >
                            Subscribe to our newsletter
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2 rotate-[-45deg]"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSubscription;

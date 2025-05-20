import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export const SupportSection = () => {
    return (
        <section className="bg-white p-3 mx-auto w-auto sm:mx-[5%] lg:mx-[10%] mt-24">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-400 font-normal text-lg lg:text-3xl leading-[42px]">
                    Need help with repairs?
                </p>
                <p className="text-3xl lg:text-[64px] font-normal text-gray-900 mb-6 leading-[72px]">
                    Ask for support
                </p>
                <p className="text-gray-600 mb-4">
                    Reach out for personalized quotations or special
                    arrangements.
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="pl-4 lg:pl-8">
                        <div className="flex items-center mb-3">
                            <FaEnvelope className="w-7 h-7 mr-3 text-gray-700" />
                            <div>
                                <p className="font-normal text-base lg:text-lg text-gray-800">
                                    Email
                                </p>
                                <p className="text-gray-600 text-base lg:text-lg">
                                    workshop@oceanpremium.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="w-7 h-7 mr-3 text-gray-700" />
                            <div>
                                <p className="font-normal text-base lg:text-lg text-gray-800">
                                    Phone
                                </p>
                                <p className="text-gray-600 text-base lg:text-lg">
                                    +33 767 25 22 44
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pr-8">
                        <p className="font-semibold text-lg text-gray-900 mb-4">
                            Send an inquiry instead
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            Alternatively fill out the form and send us an
                            inquiry. We will come back to you the old fashioned
                            way. In a flash!
                        </p>
                        <a
                            href=""
                            className="block text-sm font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] bg-gray-900 text-white"
                        >
                            Repair Inquiry Form
                        </a>
                    </div>
                </div>

                <div className="bg-[#6BCB56] mt-20 p-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <FaWhatsapp className="w-12 h-12 mr-3 text-white" />
                        <div>
                            <p className="text-gray-900 font-normal text-2xl">
                                24H rapid service!
                            </p>
                            <p className="text-gray-900 font-normal text-lg">
                                Talk directly via WhatsApp with one of our
                                Seabob technicians.
                            </p>
                        </div>
                    </div>
                    <a
                        href=""
                        className="block text-lg font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] bg-gray-900 text-white hover:bg-gray-800"
                    >
                        Chat with a specialist
                    </a>
                </div>
            </div>
        </section>
    );
};

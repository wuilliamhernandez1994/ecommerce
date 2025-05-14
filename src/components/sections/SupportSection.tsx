import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export function SupportSection() {
    return (
        <section className="bg-white py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-400 text-lg">Need help with repairs?</p>
                <h2 className="text-4xl font-semibold text-gray-900 mb-6">
                    Ask for support
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-600 mb-4">
                            Reach out for personalized quotations or special
                            arrangements.
                        </p>
                        <div className="flex items-center mb-3">
                            <FaEnvelope className="w-5 h-5 mr-3 text-gray-700" />
                            <div>
                                <p className="font-semibold text-gray-800">
                                    Email
                                </p>
                                <p className="text-gray-600">
                                    workshop@oceanpremium.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-gray-700" />
                            <div>
                                <p className="font-semibold text-gray-800">
                                    Phone
                                </p>
                                <p className="text-gray-600">
                                    +33 767 25 22 44
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-900 mb-2">
                            Send an inquiry instead
                        </p>
                        <p className="text-gray-600 mb-4">
                            Alternatively fill out the form and send us an
                            inquiry. We will come back to you the old fashioned
                            way. In a flash!
                        </p>
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800">
                            Repair Inquiry Form
                        </button>
                    </div>
                </div>

                <div className="bg-green-400 mt-12 p-6 rounded-md flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <FaWhatsapp className="w-6 h-6 mr-3 text-white" />
                        <div>
                            <p className="text-white font-semibold text-lg">
                                24H rapid service!
                            </p>
                            <p className="text-white text-sm">
                                Talk directly via WhatsApp with one of our
                                Seabob technicians.
                            </p>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800">
                        Chat with a specialist
                    </button>
                </div>
            </div>
        </section>
    );
}

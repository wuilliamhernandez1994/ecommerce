import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SquarePayment = () => {
    async function submitPayment(token: string, price: string) {
        const response = await fetch("http://93.127.215.27:3001/pay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, price }),
        });
        return await response.json();
    }

    const location = useLocation();
    const navigate = useNavigate();
    const { item, price } = location.state || {};

    const handleFinish = () => {
        // Aquí puedes poner la lógica de pago y luego regresar
        navigate(-1); // Regresa a la pantalla anterior
    };

    return (
        <div className="flex items-start justify-between flex-col-reverse sm:flex-row p-4 pt-12 sm:p-12 gap-[10%] h-full">
            <ToastContainer />
            <div className="w-full sm:w-[45%] text-center h-full flex flex-col items-center justify-between p-6 bg-gray-50 rounded-2xl shadow-md">
                <p className="text-xl font-semibold text-center text-gray-800 mb-2">
                    {item}
                </p>
                <p className="text-lg font-medium text-gray-600 mb-6">
                    Price: {price}$
                </p>
                <button
                    className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 cursor-pointer"
                    onClick={handleFinish}
                >
                    Finalizar y volver
                </button>
            </div>
            <div className="w-full sm:w-[45%] p-6 bg-gray-50 rounded-2xl shadow-md">
                <PaymentForm
                    applicationId="sq0idp-WCX4Q0AwQbCdYyQZe_ZCzg"
                    locationId="6BX7C1801EMHK"
                    cardTokenizeResponseReceived={async (token) => {
                        if (token.token) {
                            const { payment } = await submitPayment(
                                token.token,
                                price
                            );
                            console.log(payment);
                            if (payment.status === "COMPLETED") {
                                console.log(payment.status);
                                toast.success("¡Pago realizado con éxito!");
                            } else {
                                toast.error("Error al realizar el pago!");
                            }
                        } else {
                            console.error("Token is undefined:", token);
                        }
                    }}
                >
                    <CreditCard />
                </PaymentForm>
            </div>
        </div>
    );
};

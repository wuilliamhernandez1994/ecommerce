import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export interface WhatsAppButtonProps {
    phoneNumber: string; // Formato internacional sin símbolos, ej.: "5211234567890"
    message?: string; // Texto inicial opcional
    size?: number; // Tamaño del icono en píxeles
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message = "",
    size = 48,
}) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}${
        message ? `&text=${encodedMessage}` : ""
    }`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center justify-center p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors fixed bottom-[2%] right-[2%]"
        >
            <FaWhatsapp size={size} className="text-white" />
        </a>
    );
};

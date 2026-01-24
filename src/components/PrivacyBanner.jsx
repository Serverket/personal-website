import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { Text } from "./Multilanguage/Text";
import { PrivacyContext } from "./PrivacyContext";

export default function PrivacyBanner() {
    const { privacyAccepted, acceptPrivacy } = useContext(PrivacyContext);

    if (privacyAccepted) {
        return null;
    }

    return (
        <CookieConsent
            onAccept={acceptPrivacy}
            disableStyles={true}
            location="bottom"
            buttonText={<Text tid="cookieAccept" />}
            cookieName="consentcookie"
            containerClasses="fixed bottom-0 left-0 w-full z-[999] bg-black border-t border-gray-800 flex flex-row items-center justify-center gap-3 md:gap-6 py-3 px-4 md:py-4 md:px-8 shadow-2xl"
            contentClasses="flex-none text-xs md:text-sm text-gray-300"
            buttonClasses="bg-yellow-400 text-black px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-bold rounded-md hover:bg-yellow-500 transition-colors shadow-sm"
            expires={150}
        >
            <div className="flex items-center gap-2">
                <span><Text tid="cookieText1" /></span>
                <Link className="text-xs underline text-gray-400 hover:text-white transition-colors" to="/imprintprivacypolicy">
                    <Text tid="cookieText2" />
                </Link>
            </div>
        </CookieConsent>
    );
}

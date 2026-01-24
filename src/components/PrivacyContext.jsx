import React, { useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";

export const PrivacyContext = createContext({
    privacyAccepted: false,
    acceptPrivacy: () => { },
    resetPrivacy: () => { },
});

export function PrivacyProvider({ children }) {
    const [privacyAccepted, setPrivacyAccepted] = useState(
        !!Cookies.get("consentcookie")
    );

    const acceptPrivacy = () => {
        setPrivacyAccepted(true);
    };

    const resetPrivacy = () => {
        Cookies.remove("consentcookie");
        setPrivacyAccepted(false);
    };

    useEffect(() => {
        // Check initially
        setPrivacyAccepted(!!Cookies.get("consentcookie"));
    }, []);

    return (
        <PrivacyContext.Provider
            value={{ privacyAccepted, acceptPrivacy, resetPrivacy }}
        >
            {children}
        </PrivacyContext.Provider>
    );
}

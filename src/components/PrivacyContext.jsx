import React, { useState, createContext, useEffect } from "react";

export const PrivacyContext = createContext({
    privacyAccepted: false,
    acceptPrivacy: () => { },
    resetPrivacy: () => { },
});

export function PrivacyProvider({ children }) {
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const acceptPrivacy = () => {
        localStorage.setItem("privacyAccepted", "true");
        setPrivacyAccepted(true);
    };

    const resetPrivacy = () => {
        localStorage.removeItem("privacyAccepted");
        setPrivacyAccepted(false);
    };

    useEffect(() => {
        const storedPrivacy = localStorage.getItem("privacyAccepted");
        setPrivacyAccepted(storedPrivacy === "true");
    }, []);

    return (
        <PrivacyContext.Provider
            value={{ privacyAccepted, acceptPrivacy, resetPrivacy }}
        >
            {children}
        </PrivacyContext.Provider>
    );
}

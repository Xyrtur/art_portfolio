"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function CaptchaProvider({ children }: {
    children: React.ReactNode;
}) {
    const recaptchaKey: string | undefined =
        process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
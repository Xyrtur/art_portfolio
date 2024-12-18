const API_ENDPOINT = '/api/email';

export async function sendEmail(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    captchaToken: string;
}): Promise<{ data?: unknown; message?: string; error?: string; }> {
    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();

    return result;

}


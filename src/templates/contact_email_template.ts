const escapeHtml = (text: string) => {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

export const contactEmailTemplate = ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    return `
        <div style="font-family:Arial,sans-serif;padding:40px;background:#f5f5f3;color:#111;">
            <div style="max-width:700px;margin:0 auto;background:white;border-radius:30px;padding:40px;">

                <h1 style="font-size:32px;font-weight:900;margin-bottom:30px;">
                    Nuevo mensaje de contacto
                </h1>

                <div style="margin-bottom:20px;">
                    <p style="font-size:12px;text-transform:uppercase;color:#999;">
                        Nombre
                    </p>

                    <p style="font-size:18px;font-weight:bold;">
                        ${safeName}
                    </p>
                </div>

                <div style="margin-bottom:20px;">
                    <p style="font-size:12px;text-transform:uppercase;color:#999;">
                        Email
                    </p>

                    <p style="font-size:18px;font-weight:bold;">
                        ${safeEmail}
                    </p>
                </div>

                <div>
                    <p style="font-size:12px;text-transform:uppercase;color:#999;">
                        Mensaje
                    </p>

                    <div style="margin-top:10px;padding:20px;background:#fafafa;border-radius:18px;line-height:1.8;">
                        ${safeMessage}
                    </div>
                </div>

            </div>
        </div>
    `;
};
const escapeHtml = (text: string) => {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

export const registrationEmailTemplate = ({
    studentFirstName,
    studentLastName,
    studentMiddleName,
    birthDate,
    course,

    legalGuardianFirstName,
    legalGuardianLastName,
    legalGuardianMiddleName,

    phone,
    email,

    additionalInformation,
}: {
    studentFirstName: string;
    studentLastName: string;
    studentMiddleName?: string;
    birthDate: string;
    course: string;

    legalGuardianFirstName: string;
    legalGuardianLastName: string;
    legalGuardianMiddleName?: string;

    phone: string;
    email: string;

    additionalInformation?: string;
}) => {
    return `
        <div style="font-family:Arial,sans-serif;padding:40px;background:#f5f5f3;color:#111;">
            <div style="max-width:800px;margin:0 auto;background:white;border-radius:32px;padding:40px;">

                <h1 style="font-size:36px;font-weight:900;margin-bottom:40px;">
                    Nueva inscripción de alumno
                </h1>

                <div style="margin-bottom:40px;">
                    <h2 style="font-size:20px;font-weight:800;margin-bottom:20px;">
                        Alumno
                    </h2>

                    <div style="display:grid;gap:14px;">
                        <div><b>Nombre:</b> ${escapeHtml(studentFirstName)}</div>
                        <div><b>Apellido:</b> ${escapeHtml(studentLastName)}</div>
                        <div><b>Segundo nombre:</b> ${escapeHtml(studentMiddleName || "-")}</div>
                        <div><b>Fecha nacimiento:</b> ${escapeHtml(birthDate)}</div>
                        <div><b>Curso:</b> ${escapeHtml(course)}</div>
                    </div>
                </div>

                <div style="margin-bottom:40px;">
                    <h2 style="font-size:20px;font-weight:800;margin-bottom:20px;">
                        Tutor legal
                    </h2>

                    <div style="display:grid;gap:14px;">
                        <div><b>Nombre:</b> ${escapeHtml(legalGuardianFirstName)}</div>
                        <div><b>Apellido:</b> ${escapeHtml(legalGuardianLastName)}</div>
                        <div><b>Segundo nombre:</b> ${escapeHtml(legalGuardianMiddleName || "-")}</div>
                        <div><b>Teléfono:</b> ${escapeHtml(phone)}</div>
                        <div><b>Email:</b> ${escapeHtml(email)}</div>
                    </div>
                </div>

                <div>
                    <h2 style="font-size:20px;font-weight:800;margin-bottom:20px;">
                        Información adicional
                    </h2>

                    <div style="padding:24px;background:#fafafa;border-radius:24px;line-height:1.8;">
                        ${escapeHtml(additionalInformation || "-").replace(/\n/g, "<br>")}
                    </div>
                </div>

            </div>
        </div>
    `;
};
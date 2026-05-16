import { defineAction, ActionError } from "astro:actions";
import nodemailer from "nodemailer";
import { z } from "astro/zod";
import { email } from "@/src/consts/metadata";
import { contactEmailTemplate } from "@/src/templates/contact_email_template";
import { registrationEmailTemplate } from "../templates/registration_email_template";

const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
    secure: false,
    auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
    },
});

export const server = {
    sendContact: defineAction({
        accept: "form",
        input: z.object({
            name: z.string().min(2),
            email: z.string().email(),
            message: z.string().min(5),
        }),
        handler: async ({ name, email: senderEmail, message }) => {
            try {
                await transporter.sendMail({
                    from: `"Mriya Contact" <${import.meta.env.SMTP_USER}>`,
                    to: email,
                    replyTo: senderEmail,
                    subject: `Nuevo mensaje de ${name} · ${senderEmail}`,
                    html: contactEmailTemplate({
                        name,
                        email: senderEmail,
                        message,
                    }),
                });

                return {
                    success: true,
                };
            } catch (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: `Error sending email ${error}`,
                });
            }
        },
    }),
    sendRegistration: defineAction({
        accept: "form",
        input: z.object({
            studentFirstName: z.string().min(2),
            studentLastName: z.string().min(2),
            studentMiddleName: z.string().optional(),
            birthDate: z.string().min(1),
            course: z.string().min(1),

            legalGuardianFirstName: z.string().min(2),
            legalGuardianLastName: z.string().min(2),
            legalGuardianMiddleName: z.string().optional(),

            phone: z.string().min(5),
            email: z.string().email(),

            additionalInformation: z.string().optional(),
        }),

        handler: async ({
            studentFirstName,
            studentLastName,
            studentMiddleName,
            birthDate,
            course,

            legalGuardianFirstName,
            legalGuardianLastName,
            legalGuardianMiddleName,

            phone,
            email: senderEmail,

            additionalInformation,
        }) => {
            try {
                await transporter.sendMail({
                    from: `"Mriya Registration" <${import.meta.env.SMTP_USER}>`,
                    to: email,
                    replyTo: senderEmail,
                    subject: `Nueva inscripción · ${studentFirstName} ${studentLastName}`,
                    html: registrationEmailTemplate({
                        studentFirstName,
                        studentLastName,
                        studentMiddleName,
                        birthDate,
                        course,

                        legalGuardianFirstName,
                        legalGuardianLastName,
                        legalGuardianMiddleName,

                        phone,
                        email: senderEmail,

                        additionalInformation,
                    }),
                });

                return {
                    success: true,
                };
            } catch (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: `Error sending registration email ${error}`,
                });
            }
        },
    }),
};
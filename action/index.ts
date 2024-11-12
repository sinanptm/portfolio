'use server';

import NodeMailerService from "@/lib/NodeMailerService";

const nodemailer = new NodeMailerService();

export const submitMessage = async (name: string, contact: string, content: string) => {
    try {
        await nodemailer.sendMail(name, contact, content);
    } catch (error) {
        console.log(error);
    }
}
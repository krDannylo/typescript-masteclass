import { Request, Response } from 'express';
import EmailService from '../services/emailService';

const users = [
    { name: 'Dannylo', email: 'dannylo@email.com' },
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendEmail({
            to: {
                name: "Dannylo Daquele jeito", 
                email: "example@example.com"
            },
            message: {
                subject: "Bem vindo ao time", 
                body: "Seja bem vindo"
            }
        });

        return res.send();
    }
};
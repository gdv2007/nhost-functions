import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
    try {
        return { status: 200, body: { success: true } };
    } catch (error) {
        return { status: 500, body: { success: false } };
    }
};

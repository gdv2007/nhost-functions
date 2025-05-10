import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
    try {
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
};

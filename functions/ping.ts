import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
    try {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
};

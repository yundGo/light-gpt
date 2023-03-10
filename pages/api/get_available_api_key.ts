import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.API_KEY;
    res.status(200).json({ apiKey });
}

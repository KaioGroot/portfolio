'use client';
import projetosz from '../../../public/projetosz.json';
export default function handler(req, res) {
    req.AllowedMethods = ['GET'];
    if (req.method === 'GET') {
        return res.status(200).json(projetosz);
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}

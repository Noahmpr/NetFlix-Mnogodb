import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/lib/db";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const data = req.body;
      try {
        const product = await prisma.product.create({
          data: data,
        });
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the product' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}

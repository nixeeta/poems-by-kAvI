// src/pages/api/generate-poem.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { db, auth } from '../../utils/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { theme, style, length, keywords, userId } = req.body;

  const prompt = `Write a ${length} ${style} poem on the theme "${theme}". Include these words: ${keywords}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const poem = completion.choices[0].message.content;

    await addDoc(collection(db, 'poems'), {
      userId,
      title: `AI Poem on ${theme}`,
      content: poem,
      tags: keywords.split(',').map((t: string) => t.trim()),
      createdAt: serverTimestamp(),
      type: 'ai',
    });

    res.status(200).json({ poem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate poem' });
  }
}

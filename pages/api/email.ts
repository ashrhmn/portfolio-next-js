// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res.status(405).json({ msg: "Method not allowed" });
  try {
    const transport = createTransport({
      host: "smtp.sendgrid.net",
      port: 25,
      secure: false,
      auth: {
        user: "apikey",
        pass: "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",
      },
    });
    await transport.sendMail({
      from: "v2@ashrhmn.com",
      to: "ashrhmn@outlook.com",
      subject: `${req.body.name} - from Portfolio Website`,
      html: `${req.body.msg} 
      
      ${req.body.email}`,
    });
    return res.status(200).json({ msg: "sent" });
  } catch (error: any) {
    return res.status(500).json({ msg: error });
  }
}

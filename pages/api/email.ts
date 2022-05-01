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
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "fmslaravel@gmail.com",
        pass: "FmsLaravelApp1234",
      },
    });
    await transport.sendMail({
      from: "Ashik FMS",
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

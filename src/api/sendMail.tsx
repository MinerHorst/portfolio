import { VercelRequest, VercelResponse } from "@vercel/node";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export default async (req: VercelRequest, res: VercelResponse) => {
  const { to, subject, text, html } = req.body;

  try {
    const msg = await mg.messages().send({
      from: "business@lullaby-design.com",
      to,
      subject,
      text,
      html,
    });

    res
      .status(200)
      .json({ message: "Email sent successfully", messageId: msg.id });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

import { VercelRequest, VercelResponse } from "@vercel/node";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: "1dee71cfc31a2638aa36adb124578c99-309b0ef4-9646ccd2",
  domain: "sandbox6e4aa54ba19647f6b1c891042f677411.mailgun.org",
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

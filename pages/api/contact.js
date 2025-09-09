import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await resend.emails.send({
        from: "Web Contact <onboarding@resend.dev>",
        to: "info@novastdio.com",
        subject: `Nuevo mensaje de ${name}`,
        text: `Email: ${email}\n\nMensaje:\n${message}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
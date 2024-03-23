interface EmailData {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (emailData: EmailData) => {
  console.log(emailData);
  try {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

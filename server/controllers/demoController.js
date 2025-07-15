
import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  try {
    const { date, time } = req.body;
    if (!date || !time)
      return res.status(400).json({ message: "Date and time required" });
    const user = req.user;
   
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, 
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: user.email,
      subject: "Booking for Demo",
      text: `Your Demo has Been booked 
      Date:${date}
      Time:${time}
      Please be on time `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent", info });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to send email", error: err.message });
  }
};

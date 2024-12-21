import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from 'next/server';
import Mail from "nodemailer/lib/mailer";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isEmpty(inputString?: string) {
  return !inputString || inputString.trim().length === 0;
}

export async function POST(request: NextRequest) {
  const { name, email, subject, message, captchaToken } = await request.json();
  // Call method for validating the captcha.
  const captchaValidationResponse = await validateCaptcha(captchaToken);

  // Validate that capctha token has been validated.
  // Score check can be tweaked depending on how strict you want this check to be.
  if (
    captchaValidationResponse &&
    captchaValidationResponse.success &&
    captchaValidationResponse.score > 0.5
  ) {
    if (!isEmpty(name) && !isEmpty(message) && !isEmpty(subject) && !isEmpty(email)) {
      if (email && EMAIL_REGEX.test(email)) {
        // Setup email.
        const mailOptions: Mail.Options = {
          from: process.env.MY_EMAIL,
          to: process.env.MY_EMAIL,
          subject: `${subject}`,
          text: `Name: ${name}\n\nMessage:\n${message}\n\n_________________\nReply to ${email}`,
        };

        // Setup service.
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true,
          port: 465,
          auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
          },
        });

        try {
          // Send email.
          transporter.sendMail(mailOptions, function (err) {
            if (err) {
              throw new Error(err.message);
            }
          });
          return NextResponse.json({ message: "Email sent" });

        } catch (error: unknown) {
          return NextResponse.json({ error: (error as Error).message || 'Something went wrong' }, { status: 500 });
        }

      } else {
        return NextResponse.json({ error: "Please provide a valid email address." }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: "All fields are required." }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Human verification failed" }, { status: 405 });
  }
}

async function validateCaptcha(captchaToken: string) {
  // Verify that both captchaToken and RECAPTCHA_SECRET_KEY were set.
  if (captchaToken && process.env.RECAPTCHA_SECRET_KEY) {
    console.log("Validating captcha...");
    // Validate captcha.
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?${new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: captchaToken,
      })}`,
      {
        method: "POST",
      }
    );

    return response.json();
  } else {
    // Show in the console if needed values are not set.
    console.log(
      "captchaToken or RECAPTCHA_SECRET_KEY not set. Captcha could not be validated"
    );
  }
}
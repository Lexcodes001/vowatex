import { NextResponse } from "next/server";
import { parse } from "url";
import { createReadStream } from "fs";
import multer from "multer";
import UserReq from "../../../../../emails/sendUserReq";
import { render } from "@react-email/render";
import { handleEmailFire } from "@/lib/email-helper";

// Set up Multer for handling file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Disable default body parser in Next.js API routes
export const config = {
  api: {
    bodyParser: false,
  },
};

// Middleware to handle file upload
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export async function POST(req) {
  const res = NextResponse.next();
  await runMiddleware(req, res, upload.single("resume"));

  try {
    // Parse form data from the request body
    const contentType = req.headers.get("content-type");
    let respData;

    if (contentType.includes("application/json")) {
      respData = await req.json();
      console.log(respData, "1");
    } else if (contentType.includes("multipart/form-data")) {
      const Formdata = await req.formData();
      const firstName = Formdata.get("firstName");
      const lastName = Formdata.get("lastName");
      const email = Formdata.get("email");
      const tel = Formdata.get("tel");
      const channel = Formdata.get("channel");
      const request = Formdata.get("request");
      const resume = Formdata.get("resume");
      const coverLetter = Formdata.get("coverLetter");
      const type = Formdata.get("type");
      const fileUrl = Formdata.get("fileUrl");
      const fileName = Formdata.get("fileName");
      const jobName = Formdata.get("jobName");
      respData = {
        firstName,
        lastName,
        email,
        tel,
        channel,
        request,
        resume,
        coverLetter,
        fileName,
        fileUrl,
        type,
        jobName
      };
    } else {
      return NextResponse.json(
        { message: "Unsupported content type" },
        { status: 415 }
      );
    }

    // console.log("Received form data:", respData);

    // if (!data.email || !data.request) {
    //   return NextResponse.json(
    //     { message: "Missing required fields" },
    //     { status: 400 }
    //   );
    // }

    // Render the email content
    const html = render(UserReq({ data: respData }));

    // Prepare the email data
    const mailData = {
      to: process.env.SMTP_FROM,
      subject: `New ${
        respData.type === "application"
          ? "Job Application"
          : "Client Request"
      } Received`,
      html,
      attachments: [],
    };

    // Send the email with the attachment
    await handleEmailFire(mailData);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error processing email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

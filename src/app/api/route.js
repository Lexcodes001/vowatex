import UserReq from "../../../emails/sendUserReq";
import { render } from "@react-email/render";
import { handleEmailFire } from "@/lib/email-helper";

export default async function handler(req, res) {
  await sendEmail({
    to: "adetayoalexander12@gmail.com",
    subject: "Hello Dear Client!",
    html: render(UserReq()),
  });

  return res.status(200).json({ message: "Success" });
}

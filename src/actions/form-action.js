"use server";

export default async function postReq(respData) {
  try {
    const response = await fetch("/contact/email-route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(respData),
    });

    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.statusText}`);
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

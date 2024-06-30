"use server";

export default async function postReq(respData) {
  console.log("something");
  try {
    const response = await fetch("/contact/email-route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(respData),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`An error has occurred: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Message:", data.message);
    return Response.json(data);
  } catch (error) {
    console.error("Error submitting form:", error);
    console.log("There was an error submitting the form. Please try again.");
  }
}

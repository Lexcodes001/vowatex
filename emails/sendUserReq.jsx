import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Font } from "@react-email/font";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Hr } from "@react-email/hr";

const defaults = {
  firstName: "Alexander",
  lastName: "Adetayo",
  email: "adetayoalexander12@gmail.com",
  tel: "09127084405",
  channel: "LexTheLearner",
  request: "",
  resume: null,
  coverLetter:
    "khe riosguj o tjdghi thij tijth  tji  thej ietij tei etijtij thijthij th",
  type: "application",
  jobName: "Video Editor",
  fileUrl: "https://www.vowatex.com",
};

const fieldBox =
  "border-b border-neutral-300 border-solid h-fit flex justify-center";
const fieldName = "w-full flex justify-center items-center text-center";
const fieldNameText = "text-center text-xs text-neutral-500 w-full";
const fieldContent = "w-full flex justify-center items-center text-center";
const fieldContentText = "text-center text-sm font-bold text-neutral-700 w-full";

export default function UserReq({ data, url = "https://vowatex.com" }) {
  const {
    firstName,
    lastName,
    email,
    tel,
    channel,
    request,
    resume,
    fileName,
    fileUrl,
    coverLetter,
    type,
    jobName
  } = data ? data : defaults;

  const renderClientRequest = () => (
    <>
      <Section className="flex-column divide-y-5 divide-neutral-700">
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Name</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>
              {firstName} {lastName}
            </Text>
          </Container>
        </Section>
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Email</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>{email}</Text>
          </Container>
        </Section>
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Phone no.</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>{tel}</Text>
          </Container>
        </Section>
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>YT channel</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>{channel}</Text>
          </Container>
        </Section>
        <Section className={`${fieldBox} border-none`}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Service request</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={`${fieldContentText} text-left`}>{request}</Text>
          </Container>
        </Section>
      </Section>
    </>
  );

  const renderJobRequest = () => (
    <>
      <Section className="flex-column divide-y-5 divide-neutral-700">
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Name</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>
              {firstName} {lastName}
            </Text>
          </Container>
        </Section>
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Email</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>{email}</Text>
          </Container>
        </Section>
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Phone no.</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>{tel}</Text>
          </Container>
        </Section>
        <Section className={fieldBox}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Job Applied for</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={fieldContentText}>{jobName}</Text>
          </Container>
        </Section>
        <Section className={`${fieldBox} border-none`}>
          <Container className={fieldName}>
            <Text className={fieldNameText}>Cover Letter</Text>
          </Container>
          <Container className={fieldContent}>
            <Text className={`${fieldContentText} text-left`}>{coverLetter}</Text>
          </Container>
        </Section>
        <Button
          className={`w-full my-2 py-3 rounded bg-neutral-200 text-neutral-600 text-center text-sm font-bold border border-solid shadow-lg ${
            type === "application"
              ? "border-blue-500 shadow-blue-500 hover:bg-blue-500 hover:text-neutral-100"
              : "border-green-500 shadow-green-500 hover:bg-neutral-200 hover:text-neutral-600"
          }`}
          href={fileUrl}
        >
          Preview Resume
        </Button>
      </Section>
    </>
  );

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Montserrat"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "./static/Montserrat.ttf",
            format: "truetype",
          }}
        />
      </Head>
      <Preview>
        {`New ${type === "application" ? "job application" : "client request"}`}
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#7d1a1a",
                brand_light: "#b02525",
              },
            },
          },
        }}
      >
        <Body className="px-3 bg-neutral-100 rounded border-brand_light border-solid border border-y-4">
          <Container>
            <Section className="flex gap-2 justify-center items-center">
              <Column className="w-fit">
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/vowatex-8f3af.appspot.com/o/email%2Flogo.png?alt=media&token=0658cc2f-f112-4cac-a3fb-d93d3740a7a1"
                  width={40}
                  height={50}
                  className="object-cover"
                  alt="logo"
                />
              </Column>
              <Column className="w-fit">
                <Text className="pt-2 font-bold text-base text-brand_light">
                  Vowatex.
                </Text>
              </Column>
            </Section>
            <Heading
              as="h1"
              className={`pl-5 py-4 rounded text-left text-xl font-bold text-neutral-800 border border-neutral-700 border-solid border-l-8 ${
                type === "application" ? "bg-blue-400" : "bg-green-400"
              }`}
            >
              {`New ${
                type === "application" ? "Job Application" : "Client Request"
              }`}
            </Heading>
          </Container>
          <Container
            className={`px-4 pt-0 pb-2 border-solid shadow-lg border-neutral-200 shadow-neutral-200 border bg-neutral-50 rounded-lg`}
          >
            {type === "application"
              ? renderJobRequest()
              : renderClientRequest()}
          </Container>
          <Section>
            <Text className="text-xs text-center text-neutral-500">
              Copyright 2024 © Vowatex Content.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}

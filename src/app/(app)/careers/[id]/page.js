import { Vacancies } from "../constants";

export async function generateStaticParams({params}) {
  const {id } = params;
  const career = Vacancies.find((item) => item.uid === id);

  return <div>Job name: {career.name}</div>;
}

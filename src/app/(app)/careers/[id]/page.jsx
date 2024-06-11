import CareerPage from ".";
import { Vacancies } from "../constants";

export function generateStaticParams() {
  return Vacancies.map((career) => ({
    id: career.uid,
  }));
}

export default function CareerItemPage({ params }) {
  const { id } = params;
  return <CareerPage career={id} />;
}

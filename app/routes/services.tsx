import { useParams } from "react-router";

export default function Service() {
  const { id } = useParams();

  switch (id) {
    case "hit_him":
      return <Hitthedrunk />;
    default:
      return <div>Зря ты сюда зашел, парень.</div>;
    case "detox":
      return <Detox />;
    case "coding":
      return <Coding />;
    case "psychiatrist":
      return <Psychiatrist />;
  }
}

function Hitthedrunk() {
  return <div>Услуга дать люлей синяку</div>;
}

function Detox() {
  return <div>Услуги детоксикации</div>;
}

function Coding() {
  return <div>Кодирование. Химическая защита от алкоголя</div>;
}

function Psychiatrist() {
  return <div>Консультации психиатра-нарколога. Психотерапия</div>;
}

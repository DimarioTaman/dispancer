import { useParams } from "react-router";

export default function Service() {
  const { id } = useParams();

  switch (id) {
    case "virvat_zub":
      return <VirvatZub />;
    default:
      return <div>Услуга точно не найдена!</div>;
  }
}

function VirvatZub() {
  return <div>Услуга вырвать зуб</div>;
}

import { useParams } from "react-router";

const { id } = useParams();

export default function Service() {
  return (
    <div>
      <p>Service ID: {id}</p>
    </div>
  );
}

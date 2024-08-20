import {useParams} from "react-router-dom";

export default function ChallengePage() {
  const { id } = useParams();

  return (
    <div>
      render challenge here {id}
    </div>
  );
}
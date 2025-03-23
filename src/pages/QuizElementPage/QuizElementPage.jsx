import { useParams } from "react-router-dom";
import QuizElementList from "../../components/QuizElementList/QuizElementList.jsx";

const QuizElementPage = () => {
  const { id } = useParams();

  return (
    <section>
      <QuizElementList id={id} />
    </section>
  );
};

export default QuizElementPage;

import { useParams } from "react-router-dom";
import EditQuiz from "../../components/EditQuiz/EditQuiz.jsx";

const EditQuizPage = () => {
  const { id } = useParams();

  return <EditQuiz id={id} />;
};

export default EditQuizPage;

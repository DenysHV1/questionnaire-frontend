import { Link, useLocation } from "react-router-dom";
import s from "./QuizCard.module.css";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu.jsx";

const QuizCard = ({ items }) => {
  const [toggleCard, setToggleCard] = useState(false);
  const location = useLocation();
  const { _id, description, name, questions } = items;

  const handleOpenCard = () => {
    setToggleCard((prev) => !prev);
  };

  const handleCloseCard = () => {
    setToggleCard(false);
  };

  return (
    <li className={s.quizCard}>
      <button type="button" className={s.cardMenu} onClick={handleOpenCard}>
        <CiMenuKebab />
      </button>
      <p>{name}</p>
      <p>{description}</p>
      <Link to={`/quiz/${_id}`} state={{ from: location }}>
        Questions: {questions.length}
      </Link>
      {toggleCard && <CardMenu id={_id} onCloseCard={handleCloseCard} />}
    </li>
  );
};

export default QuizCard;

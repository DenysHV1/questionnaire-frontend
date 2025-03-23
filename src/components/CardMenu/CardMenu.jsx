import s from "./CardMenu.module.css";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { IoIosClose } from "react-icons/io";

import { deleteQuizListThunk } from "../../redux/operations.js";

const CardMenu = ({ id, onCloseCard }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.cardMenu}>
      <button type="button" className={s.closeCard} onClick={onCloseCard}>
        <IoIosClose />
      </button>
      <Link to={`editQuiz/${id}`} onClick={onCloseCard} className={s.edit}>
        Edit
      </Link>
      <button type="button" disabled={true}>
        Run
      </button>
      <button type="button" onClick={() => dispatch(deleteQuizListThunk(id))}>
        Delete
      </button>
    </div>
  );
};

export default CardMenu;

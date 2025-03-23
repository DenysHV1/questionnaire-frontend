import { useDispatch } from "react-redux";
import s from "./CardMenu.module.css";
import { IoIosClose } from "react-icons/io";
import { deleteQuizListThunk } from "../../redux/operations.js";
import { Link } from "react-router-dom";

const CardMenu = ({ id, onCloseCard }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.cardMenu}>
      <button type="button" className={s.closeCard} onClick={onCloseCard}>
        <IoIosClose />
      </button>
      <Link to={`editQuiz/${id}`} onClick={onCloseCard}>
        Edit
      </Link>
      <button type="button">Run</button>
      <button type="button" onClick={() => dispatch(deleteQuizListThunk(id))}>
        Delete
      </button>
    </div>
  );
};

export default CardMenu;

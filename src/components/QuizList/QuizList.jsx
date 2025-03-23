import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectQuizList,
} from "../../redux/selectors.js";
import { useEffect } from "react";
import { getQuizListThunk } from "../../redux/operations.js";
import QuizCard from "../QuizCard/QuizCard.jsx";
import s from './QuizList.module.css'

const QuizList = () => {
  const quizList = useSelector(selectQuizList);
  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizListThunk());
  }, [dispatch]);

  return (
    <ul className={s.quizList}>
      {!loading ? (
        <>
          {!errorMessage ? (
            <>
              {quizList.length > 0 ? (
                <>
                  {quizList.map((item) => (
                    <QuizCard key={item._id} items={item} />
                  ))}
                </>
              ) : (
                <li>List is Empty!</li>
              )}
            </>
          ) : (
            <li>Error</li>
          )}
        </>
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
};

export default QuizList;

import s from "./QuizList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  selectError,
  selectLoading,
  selectQuizList,
} from "../../redux/selectors.js";
import { getQuizListThunk } from "../../redux/operations.js";
import QuizCard from "../QuizCard/QuizCard.jsx";

const QuizList = () => {
  const quizList = useSelector(selectQuizList);
  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  const [sortType, setSortType] = useState(null);

  useEffect(() => {
    dispatch(getQuizListThunk());
  }, [dispatch]);

  const sortedQuizList = [...quizList].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortType === "questionsCount") {
      return a.questions.length - b.questions.length;
    }
    return 0;
  });

  return (
    <>
      <div className={s.sortButtons}>
        <button onClick={() => setSortType("name")} className={s.btn}>
          Sort by Name
        </button>
        <button onClick={() => setSortType("questionsCount")} className={s.btn}>
          Sort by Questions Count
        </button>
      </div>

      <ul className={s.quizList}>
        {!loading ? (
          <>
            {!errorMessage ? (
              <>
                {sortedQuizList.length > 0 ? (
                  <>
                    {sortedQuizList.map((item) => (
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
    </>
  );
};

export default QuizList;

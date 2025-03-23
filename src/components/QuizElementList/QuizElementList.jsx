import s from "./QuizElementList.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  selectError,
  selectLoading,
  selectQuizElement,
} from "../../redux/selectors.js";
import { getByIdQuizElementThunk } from "../../redux/operations.js";

import QuizElementItem from "../QuizElementItem/QuizElementItem.jsx";
import BackLink from "../BackLink/BackLink.jsx";

const QuizElementList = ({ id }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const quizElement = useSelector(selectQuizElement);
  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    dispatch(getByIdQuizElementThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <BackLink location={location} />
      <ul className={s.quizElementList}>
        {!loading ? (
          <>
            {!errorMessage ? (
              <>
                {quizElement?.questions?.length > 0 ? (
                  <form className={s.form}>
                    {quizElement?.questions?.map((item) => (
                      <QuizElementItem key={item._id} items={item} />
                    ))}
                  </form>
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

export default QuizElementList;

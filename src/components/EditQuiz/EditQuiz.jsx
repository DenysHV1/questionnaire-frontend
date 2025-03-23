import s from "./EditQuiz.module.css";

import { Form, Field, Formik } from "formik";
import toast from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BackLink from "../BackLink/BackLink.jsx";

import {
  getByIdQuizElementThunk,
  putQuizElementThunk,
} from "../../redux/operations.js";
import {
  selectError,
  selectLoading,
  selectQuizElement,
} from "../../redux/selectors.js";

const EditQuiz = ({ id }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizElement = useSelector(selectQuizElement);
  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    dispatch(getByIdQuizElementThunk(id));
  }, [dispatch, id]);

  const initialValues = {
    name: quizElement?.name || "",
    description: quizElement?.description || "",
    questions: quizElement?.questions || [],
  };

  const handleSubmit = async (values) => {
    try {
      const updatedQuestions = values.questions.map(({ _id, ...rest }) => rest);

      const updatedValues = {
        ...values,
        questions: updatedQuestions,
      };

      await toast.promise(
        dispatch(putQuizElementThunk({ id, body: updatedValues })).unwrap(),
        {
          loading: "Loading...",
          success: "Successfully updated",
          error: "Error during update",
        }
      );

      navigate(`/quiz/${id}`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <BackLink location={location} />
      <ul className={s.quizElementList}>
        {!loading ? (
          <>
            {!errorMessage ? (
              <>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                >
                  {({ values, handleChange, handleBlur }) => (
                    <Form className={s.form}>
                      <div className={s.form_group}>
                        <label className={s.form_label} htmlFor="name">
                          Quiz Name
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className={s.form_input}
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className={s.form_group}>
                        <label className={s.form_label} htmlFor="description">
                          Description
                        </label>
                        <Field
                          type="text"
                          id="description"
                          name="description"
                          className={s.form_input}
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className={s.questions_group}>
                        <h3>Questions:</h3>
                        {values.questions.map((question, index) => (
                          <div key={question.id} className={s.question_item}>
                            <label
                              className={s.form_label}
                              htmlFor={`questions[${index}].label`}
                            >
                              Question {index + 1}
                            </label>
                            <Field
                              type="text"
                              id={`questions[${index}].label`}
                              name={`questions[${index}].label`}
                              className={s.form_input}
                              value={question.label}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <div className={s.form_group}>
                              <label
                                className={s.form_label}
                                htmlFor={`questions[${index}].type`}
                              >
                                Type
                              </label>
                              <Field
                                as="select"
                                id={`questions[${index}].type`}
                                name={`questions[${index}].type`}
                                className={s.form_input}
                              >
                                <option value="single">Single</option>
                                <option value="multiple">Multiple</option>
                              </Field>
                            </div>
                            {question.options && (
                              <div className={s.options_group}>
                                <label className={s.form_label}>Options</label>
                                {question.options.map((option, optionIndex) => (
                                  <div
                                    key={optionIndex}
                                    className={s.option_item}
                                  >
                                    <Field
                                      type="text"
                                      name={`questions[${index}].options[${optionIndex}]`}
                                      value={option}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      className={s.form_input}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      <button type="submit" className={s.form_button}>
                        Save Changes
                      </button>
                    </Form>
                  )}
                </Formik>
              </>
            ) : (
              <li className={s.error_message}>Error</li>
            )}
          </>
        ) : (
          <li className={s.loading_message}>Loading...</li>
        )}
      </ul>
    </>
  );
};

export default EditQuiz;

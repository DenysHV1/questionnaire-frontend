import { useState } from "react";
import s from "./CreateQuizForms.module.css";
import { initialValues } from "./initialValues.js";
import CreateQuestionForm from "../CreateQuestionForm/CreateQuestionForm.jsx";
import CreateOptionsForm from "../CreateOptionsForm/CreateOptionsForm.jsx";
import CreateMainSendForm from "../CreateMainSendForm/CreateMainSendForm.jsx";
import { useDispatch } from "react-redux";
import { postQuizElementThunk } from "../../redux/operations.js";
import { v4 as uuidv4 } from 'uuid';

const CreateQuizForms = () => {
  const [quizData, setQuizData] = useState(initialValues);
  const dispatch = useDispatch()

  //! handleAddQuestion
  const handleAddQuestion = (values, { resetForm }) => {
    if (!values.label.trim()) {
      console.log("Field question is empty!");
      return;
    }

    const newQuestion = {
      id: uuidv4(),
      label: values.label,
      type: values.type,
      options: [],
    };

    setQuizData((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
    }));

    resetForm();
  };

  //! handleAddOption
  const handleAddOption = (values, { resetForm }) => {
    if (!values.text.trim()) {
      console.log("Field option is empty!");
      return;
    }

    setQuizData((prev) => {
      const lastQuestionIndex = prev.questions.length - 1;
      if (lastQuestionIndex < 0) {
        console.log("No questions available to add options.");
        return prev;
      }

      const updatedQuestion = {
        ...prev.questions[lastQuestionIndex],
        options: [...prev.questions[lastQuestionIndex].options, values.text],
      };

      const updatedQuestions = prev.questions.map((q, i) =>
        i === lastQuestionIndex ? updatedQuestion : q
      );

      return { ...prev, questions: updatedQuestions };
    });

    resetForm();
  };

  //! handleSubmit
  const handleSubmit = (values) => {
    if (!values.name.trim()) {
      console.log("Field name is empty!");
      return;
    }
    if (!values.description.trim()) {
      console.log("Field description is empty!");
      return;
    }
    if (values.questions.length === 0) {
      console.log("Where is quiz?");
      return;
    }
console.log(values);

    dispatch(postQuizElementThunk(values))
  };

  return (
    <div className={s.form_container}>
      <CreateQuestionForm handleAddQuestion={handleAddQuestion} />
      <CreateOptionsForm handleAddOption={handleAddOption} />
      <CreateMainSendForm handleSubmit={handleSubmit} quizData={quizData} />
    </div>
  );
};

export default CreateQuizForms;

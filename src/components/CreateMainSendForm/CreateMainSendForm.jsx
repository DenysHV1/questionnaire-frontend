import s from "./CreateMainSendForm.module.css";
import { Field, Form, Formik } from "formik";
import FormPreview from "../FormPreview/FormPreview.jsx";

const CreateMainSendForm = ({ quizData, handleSubmit }) => {
  return (
    <Formik
      initialValues={quizData}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="name" className={s.form_label}>
              Quiz Name
            </label>
            <Field type="text" id="name" name="name" className={s.form_input} />
          </div>
          <div>
            <label htmlFor="description" className={s.form_label}>
              Description
            </label>
            <Field
              type="text"
              id="description"
              name="description"
              className={s.form_input}
            />
          </div>
          <FormPreview values={values} />
          <button type="submit" className={s.form_button}>
            Submit Quiz
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateMainSendForm;

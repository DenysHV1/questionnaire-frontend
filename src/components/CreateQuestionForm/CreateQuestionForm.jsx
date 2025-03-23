import { Field, Form, Formik } from "formik";
import s from "./CreateQuestionForm.module.css";

const CreateQuestionForm = ({ handleAddQuestion }) => {
  return (
    <Formik
      initialValues={{ label: "", type: "single" }}
      onSubmit={handleAddQuestion}
    >
      {() => (
        <Form>
          <div>
            <label className={s.form_label} htmlFor="label">
              Question:
            </label>
            <Field
              className={s.form_input}
              type="text"
              id="label"
              name="label"
            />
          </div>

          <div>
            <label htmlFor="type">Question Type:</label>
            <Field as="select" id="type" name="type" className={s.form_select}>
              <option value="single">Single</option>
              <option value="multiple">Multiple</option>
            </Field>
          </div>

          <button type="submit" className={s.form_button}>Add question</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateQuestionForm;

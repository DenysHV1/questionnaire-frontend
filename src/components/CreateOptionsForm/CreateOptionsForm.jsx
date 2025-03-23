import s from "./CreateOptionsForm.module.css";
import { Field, Form, Formik } from "formik";

export const CreateOptionsForm = ({ handleAddOption }) => {
  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleAddOption}>
      {() => (
        <Form className={s.form}>
          <div>
            <label htmlFor="text" className={s.form_label}>
              Answer Option:
            </label>
            <Field type="text" id="text" name="text" className={s.form_input} />
          </div>
          <button type="submit" className={s.form_button}>
            Add answer
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateOptionsForm;

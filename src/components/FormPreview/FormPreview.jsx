import s from "./FormPreview.module.css";

const FormPreview = ({ values }) => {
  return (
    <div className={s.questions_list}>
      <h3>Questions:</h3>
      {values.questions.length > 0 ? (
        values.questions.map((q, index) => (
          <div key={index} className={s.question_item}>
            <p>
              <strong>
                Q{index + 1}: {q.label}
              </strong>{" "}
              ({q.type})
            </p>
            {q.options.length > 0 && (
              <div className={s.answers}>
                {q.options.map((option, i) => (
                  <label key={i} className={s.option_label}>
                    <input
                      type={q.type === "single" ? "radio" : "checkbox"}
                      name={`question-${index}`}
                      value={option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No questions added yet.</p>
      )}
    </div>
  );
};

export default FormPreview;

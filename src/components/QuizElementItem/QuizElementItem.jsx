import s from './QuizElementItem.module.css'

const QuizElementItem = ({ items }) => {

	return (
	  <div>
		<label className={s.label} htmlFor={items.id}>{items.label}</label>
		<div className={s.answers}>
		  {items?.options?.map((option, index) => (
			<div key={index}>
			  <input
				type={items.type === "single" ? "radio" : "checkbox"}
				id={`${items.id}-${index}`}
				name={items.id}
				value={option} 
			  />
			  <label htmlFor={`${items.id}-${index}`}>{option}</label>
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default QuizElementItem;
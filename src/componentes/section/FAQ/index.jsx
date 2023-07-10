import '@/componentes/section/FAQ/faq.css'

const FAQ = (props) => {
  const toggleAnswer = (index) => {
    const answerElement = document.getElementById(`answer-${index}`);
    answerElement.classList.toggle("show");
  };

  return (
    <div className="faq-container">
      <h1>{props.data.title}</h1>
      <ul>
        {props.data.items.map((item, index) => (
          <li className="faq-item" key={index}>
            <h2 className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </h2>
            <p id={`answer-${index}`} className="faq-answer">
              {item.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

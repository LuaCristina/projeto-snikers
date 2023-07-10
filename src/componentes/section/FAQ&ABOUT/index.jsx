import '@/componentes/section/FAQ&ABOUT/faq&about.css'

const FAQ = (props) => {
    const toggleAnswer = (index) => {
      const answerElement = document.getElementById(`answer-${index}`);
      answerElement.classList.toggle("show");
    };
  
    return (
      <div>
        <h1>{props.data.title}</h1>
        {props.data.items.map((item, index) => (
          <div className="faq-item" key={index}>
            <h2 className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </h2>
            <p id={`answer-${index}`} className="faq-answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FAQ;
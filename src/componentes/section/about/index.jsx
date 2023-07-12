
import '@/componentes/section/about/about.css'


const About = (props) => {
    return (
      <div>
          
        <div className="about-container">
          <div className="about-image">
            <img src={props.data.image} alt="" />
          </div>
          <h1 className="about-title">{props.data.title}</h1>
        </div>
          <p className="about-content">{props.data.content}</p>

      </div>
    );
  };
  
  export default About;
  
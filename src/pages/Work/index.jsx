
import "./work.scss";

const Work = () => {

  const projects = [
    {
      image: "./assets/project1.png",
      name: "Reantal Car Application",
      description: "A Rental Czr Application developed using FLutter<span>people who want to rent a Car and find many suitable solutions </span><span class='dot'>.</span>",
      topic: "Rental Car Application",
      link: "https://github.com/Piscado140303/carilly.git",
      id: 2,
      btnText: 'View Work',
    },
    {
      image: "./assets/project3.png",
      name: "Portfolio Project",
      description: "A portfolio for eamiling the customer to have some orders<span>so it will be easy to put his work and recieves demends of work dynamicly </span><span class='dot'>.</span>",
      topic: "Portfolio for Some special Work",
      link: "https://zinebfiche.netlify.app/",
      id: 1,
      btnText: 'View Work',
    },
    {
      image: "./assets/project2.png",
      name: "InspectorHub Webiste",
      description: "A Website for managing the Inspectors and thier teachers  <span>Inspectors and teachers will find it too easy to see thier submissions and thier time tables and the needed meetings</span><span class='dot'>.</span>",
      topic: "Website Design",
      link: "",
      id: 1,
      btnText: 'View Work',
    },
  ]

  return (
    <div className='work-div' id='work'>
      <h2>Selected <span>Works</span></h2>
      
      {projects.map((value, index) => (
        <div className={`work-div-flex ${value.id === 2 && "row-reverse"} hidden`} key={index}>
          <div className='image-loading'>
            <img src={value.image} alt={value.name} />
          </div>
          <div className='work-details'>
            <h4>{value.name}</h4>
            <p dangerouslySetInnerHTML={{ __html: value.description }}></p>
            <p className='text-small'>{value.topic}</p>
            <a target='blank' href={value.link}><p>{value.btnText}</p> <i className="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work;
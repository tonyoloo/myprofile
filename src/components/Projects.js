import React from 'react'
import Wow from 'wowjs'
import { useEffect, useState } from 'react';
import Data from '../Projects_Data';
import ClientSlider from './ClientSlider';


export default function Projects() {

  const [projectData, setProjectData] = useState(Data)

  useEffect(() => {
    
    setProjectData(Data)

    const wow = new Wow.WOW({ live: false });
    wow.init();

    const buttons = document.querySelectorAll('.custom-outline-button');
    const items = document.querySelectorAll('.item');

    const handleButtonClick = (button) => {
      buttons.forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');

      const filterValue = button.getAttribute('data-filter');
      items.forEach((item) => {
        if (filterValue === '*' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => handleButtonClick(button));
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', () => handleButtonClick(button));
      });
    };
  }, []);

  const projects = projectData.map(project =>{

    return(
      <a target="_blank" href={project.link} key={project.id} className={`item text-decoration-none ${project.category}`}>
          <div className="  wow zoomIn">
              <div className="img-place project-card ">
                <img
                  src={`/myprofile/images/projects/${project.image}`}//mychanges
                  alt="screenshot"
                  className='img-fluid'
                />
                <div className="img-captio d-flex align-items-center justify-content-center p-2">
                  <h5 className="img-caption">{project.title}</h5>
                </div>
              </div>
          </div>
      </a>
    )
  })

  return (
    <div className='projects pt-4 pb-3 px-2 d-flex justify-content-center' id='projects'>

        <div className='portfolio col-lg-10 pt-5'>
          <section className='portfolio-header d-flex flex-column align-items-center'>
            <div className="text-center wow zoomIn">
              <div className="badge badge-subhead header-text" id='header-text'>Portfolio</div>
            </div>
            <h1 className="portfolio-sub text-center fw-normal wow zoomIn">See my work</h1>
            <div className="filterable-button d-flex flex-wrap justify-content-center col-9 py-3 gap-2 wow fadeInUp" data-toggle="selected">
              <button className="custom-outline-button selected" data-filter="*">
                All
              </button>
              <button className="custom-outline-button " data-filter=".web">
                Web Apps
              </button>
              <button className="custom-outline-button" data-filter=".mobile">
                Mobile Apps
              </button>
              <button className=" custom-outline-button" data-filter=".ai">AI & ML</button>

            </div>
          </section>
          <section className='project-images d-flex pt-2 gap-4 flex-wrap justify-content-center'>
            {projects}
          </section>
          <section className='load d-flex justify-content-center mt-2 p-1'>
            <a className=' btn btn-sm btn-primary mt-3 load-more' href='https://github.com/tonyoloo'>See More</a>
          </section>
          <br></br>
          <br></br>

          <div className="text-center wow zoomIn mt-3">
              {/* <div className="badge badge-subhead header-text" id='clients-header-text'>what they say</div>
               */}
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ff0000" class="bi bi-quote" viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
      </svg>
          </div>
          <section className='reviews mt-3 pt-2 container d-flex justify-content-center'>
              <ClientSlider />
          </section>
        </div>
    
    </div>

  )
}

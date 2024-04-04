import React from 'react'
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import Wow from 'wowjs';

export default function Home() {

  var wow = new Wow.WOW({live: false});

  useEffect(()=>{
    wow.init();
  }, )
  
    
    return(
    <div className='landingPage d-sm-flex justify-content-center align-items-center' id='home'>
      
      <div className='landing-bo bg- p-3 p-md-0 d-flex justify-content-center justify-content-md-center gap-md-2 container-fluid flex-column flex-md-row bg-succes gap-2 align-items-center '>
        <img src='/myprofile/images/download.png' className='image_sm d-md-none my-2' />
        <div className='landing-items col-10 col-md-6 d-flex bg-dange flex-column justify-content-center py-3 py-md-0 m-md-0 gap-4 gap-md-3 justify-content-sm-aroun justify-content-md-between justify-content-xl-between justify-content-xxl-around align-items-center'>

          <div className='landing-text text-center bg-dange col-12'>
            <h2 className='title text-uppercase text-center wow fadeInLeft'>Tony <span className='brian'>Oloo</span></h2>
            <Typed
                    strings={['Web and Mobile Developer.', 'USSD Developer','API Integrations','UX/UI Designer.', "Got Enquiries? Let's Chat."]}
                    typeSpeed={40}
                    backSpeed={50}
                    startDelay={300}
                    backDelay={800}
                    loop
                    className='subtitle m-0'
                    id='subtitle'
                />
          </div>
          <div className='landing-buttons text-decoration-none d-flex my-3 flex-column bg-secondar col-sm-7 col-10 col-md-9 col-lg-8 col-xl-6 wow fadeInUp'>
            <div className='know-more p-1 text-center py-md-3'>
              <a  className='text-uppercase text-decoration-none' href='#about'>Know More!</a>
            </div>
            <div className='lets-chat p-1 my-2 text-center py-md-3'>
              <a className=' text-uppercase text-decoration-none' href='https://wa.me/254727045828'>Let's Chat</a>
            </div> 
          </div>

        </div>
        <img src='/myprofile/images/download.png' className='image_md d-none d-md-block' />

      </div>
      
    </div>

    )
  } 

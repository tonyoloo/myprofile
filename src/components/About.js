import React from 'react'
import Wow from 'wowjs'
import { useEffect } from 'react';


export default function About() {
    var wow = new Wow.WOW({live: false});

    useEffect(()=>{
      wow.init();
    }, )
   
  return (
    <div className='about pt-4 pb-1 px-2 d-flex justify-content-center' id='about'>
      <div className='col-md-10 col-lg-9 col-xl-8 pt-5 bg-dange d-flex flex-column'>
      <section className='about-header'>
        <h4 className='header-text text-uppercase wow slideInLeft'>who I am</h4>
    </section>
    <section className='mt-3 px-2 pb-2 wow slideInUp paragraph'>
    <p>Am a self-driven person and result-oriented.</p>

<p>I have a Bachelor degree in Business Information Management and did a professional course with KASNEB, i.e., Certified Information Communication Technologist in which I emerged the best student of the Software Engineering Unit while taking the course. Completed a Masters degree in Information Technology Management at Nairobi University.</p>

<p>I have developed several mobile apps currently on the Google Play Store. I have so far done projects at various institutions namely, National Bank of Kenya, Brand Kenya Board, National Environment Trust Fund, Ministry of Tourism Trade and Commerce, and Kenya Institute of Management, Safaricom, Airtel, KRA, and Higher Education Loans Board.</p>

<p>To further build my skills, I took part in the AVIC and GEARBOX Africa mobile app challenge in which I emerged among the top ten candidates, won KNATCOM 2017 hackathon hosted by UNESCO, also won the Hack My Bible Challenge 2019 hosted by Bible Society of Kenya.</p>

        
    </section>
    <section className='princples px-1 p-2 my-3 text-light text-center d-flex flex-wrap justify-content-between'>
      <section className='moral wow slideInUp mt-3'>
        <section className='moral-header d-flex gap-2 align-items-center align-content-center heading'>
          <p className='moral-label d-flex justify-content-center align-items-center '>1</p>
          <p className='moral-title d-flex justify-content-center align-items-center'>Professional</p>
        </section>
        <p className='moral-description text-start mx-4 px-2 pt-2 paragraph'>
        I demonstrate expertise in coding, debugging, and problem-solving.
I adhere to industry best practices and coding standards, consistently delivering high-quality, well-documented code.        </p>

      </section>
      <section className='moral wow slideInUp mt-3'>
        <section className='moral-header d-flex gap-2 align-items-center align-content-center heading'>
          <p className='moral-label d-flex justify-content-center align-items-center '>2</p>
          <p className='moral-title d-flex justify-content-center align-items-center'>Principled</p>
        </section>
        <p className='moral-description text-start mx-4 px-2 pt-2 paragraph'>
        I uphold ethical standards in all aspects of my software development work.
I maintain transparency in my communication and actions, taking responsibility for mistakes and working towards continuous improvement.        </p>

      </section>
      <section className='moral wow slideInUp mt-3'>
        <section className='moral-header d-flex gap-2 align-items-center align-content-center heading'>
          <p className='moral-label d-flex justify-content-center align-items-center '>3</p>
          <p className='moral-title d-flex justify-content-center align-items-center'>Pertinent</p>
        </section>
        <p className='moral-description text-start mx-4 px-2 pt-2 paragraph'>
        I understand and prioritize client needs and requirements.
I actively engage with clients to gather feedback and ensure satisfaction, developing solutions that align with their business goals and objectives.        </p>
      </section>
      <section className='moral wow slideInUp mt-3'>
        <section className='moral-header d-flex gap-2 align-items-center align-content-center heading'>
          <p className='moral-label d-flex justify-content-center align-items-center '>4</p>
          <p className='moral-title d-flex justify-content-center align-items-center '>Pristine</p>
        </section>
        <p className='moral-description text-start mx-4 px-2 pt-2 paragraph'>
        I adhere to a strict code of ethics in my software development practices.
I prioritize user privacy and data security in all projects, taking a principled approach to decision-making and considering the impact on stakeholders.        </p>

      </section>
      
      
    </section>
    <section className='call text-start pt-2 wow slideInUp mt-3 align-self-md-center paragraph'>
        <p className='mb-1'><span className='highlight'>Call/Whatsapp:</span> (254)727045828</p>
        <p className='mb-1'><span className='highlight'>Email:</span> safariappreneurs@gmail.com</p>
      </section>
    
      </div>

    </div>
  )
}

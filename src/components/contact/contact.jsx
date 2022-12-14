import React from 'react'
import "./contact.css"
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1mfzrbh', 'template_ppp1sh7', form.current, '8kmrd3XC-eoSETlFg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineMarkEmailRead className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>ajayipami1@gmail.com</h5>
              <a href="mailto:ajayipami1@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+234 705 186 5705</h5>
              <a href="https://wa.me/2347051865705" target="_blank">Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

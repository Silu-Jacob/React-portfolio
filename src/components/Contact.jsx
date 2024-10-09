import React from 'react'
import './contact.css'
function Contact() {
  return (
    <>
    
      <div className="work">
       <h1 style={{color:'wheat'}}>Contact Me</h1>
        <hr />
      </div>
      <div className="container-contact">
      <p>Drop your message and I will connect you</p>

      <div class="contact-right">
           <form>
            <input type="text" name="name" placeholder="Your name"></input>
            <input type="email" name="email" placeholder="Your Email"></input>
            <textarea name="Message" id="" rows="6" placeholder="Your Message"></textarea> <br />
            <button type="submit" class="cv">Send Message</button>
           </form>
      </div>
      </div>

      <div className="container-social">
        <span><i class="fa-brands fa-instagram"></i></span>
        <span><i class="fa-brands fa-linkedin"></i></span>
        <span><i class="fa-brands fa-twitter"></i></span>
      </div>
    </>
  )
}

export default Contact

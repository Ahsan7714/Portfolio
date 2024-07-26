
import './Contact.css'
import {FaLinkedin,FaPhone} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

function Contact  () {


  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title ' >GET IN <span className='about_contact'>TOUCH</span> </h2>

      <div id='cont'>

        <a href="www.linkedin.com/in/muhammad-ahsan-5116b428a" target="_blank" aria-label='linkedin' className='link link--icon'> <FaLinkedin size={60}/> </a>
        <a href="https://github.com/Ahsan7714" target="_blank" aria-label='github' className='link link--icon'> <BsGithub  size={60}/> </a>
      
        <a href='mailto:ahsan1617k@gmail.com' aria-label="email" className='link link--icon'> <MdEmail  size={60}/> </a>

      </div>
     
    </section>
  )
}

export default Contact

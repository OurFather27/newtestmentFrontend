import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import ContactFeedback from './ContactFeedback'
import "./contact.css"
import Helmet from 'react-helmet';

function Contact() {
  return (
    <div>
     <Topbar/>
{/*<Helmet bodyAttributes={{style: "background-image : url('./1.jpeg')"}}/>*/}

      <div className="contact-contnair">
      <br></br>      <br></br>      <br></br>
        <h1 className="">CONTACT</h1>
         <p>
           <h4>Christ for the World</h4><br/>
            998 new ray Avenue, #998<br/>

            Addis abeba, NY  328973<br/>

            info@christFortheworld.org
         </p>
         </div>
         <ContactFeedback/>
       <div className="footer_height">
      </div>
     
      <Footer/>
    </div>
  );
}
export default Contact;

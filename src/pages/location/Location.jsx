import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./location.css"
import Helmet from 'react-helmet';
function Location() {
  return (
    <>
    <Topbar/>
    {/*<Helmet bodyAttributes={{style: "background-image : url('./1.jpeg')"}}/>*/}

      <div className="contact-contnair">
      <br></br>      <br></br>      <br></br>
        <h1 className="">Location</h1>
         <p>
           <h4>Future Leaders Foundation</h4><br/>
            909 Third Avenue, #986<br/>

            New York, NY  10150<br/>

            info@fortissociety.org
         </p>
         </div>
      <div className="Location_container">
      <iframe
      height="300" 
      src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=addis%20abeba+(passion%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      <a href="https://www.maps.ie/population/">Population Estimator map</a>
      </iframe>
</div>
{/*<div className="footer_height">
</div>*/}
      <Footer/>
    </>
  );
}

export default Location
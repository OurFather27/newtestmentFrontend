import React from 'react'
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Badge from 'react-bootstrap/Badge';
import { Badge,Button,Navbar,Nav,NavItem,Dropdown,MenuItem,variant,Row} from 'react-bootstrap';
import { BASE_URL } from '../../../userMGMservice/helper';
import { Link } from 'react-router-dom';
import { statuschangefunc } from "../../../userMGMservice/Apis"
import { ToastContainer, toast } from "react-toastify"
import "./about.css"
import Helmet from 'react-helmet';


const About = ({ userdata, deleteUser, userGet, handlePrevious, handleNext, page, pageCount, setPage }) => {
  return (
    <>
      <div className="container"> 

      <div className="container-about">
            <h2 className="">ABOUT</h2>
        </div> 
                  {
                    userdata.length > 0 ? userdata.map((element, index) => {
                      return (

<>
<div className="ourMission">
{/*<div className="card-profile-stats d-flex justify-content-center">
<img src={`${BASE_URL}/uploads/${element.profile}`} alt="img" />
</div>*/}
        <h2 className="">{element.fname}</h2>
        <p className="">{element.lname}</p>

        <div className="deleteANDedit">
          <Link to={`/edit/${element._id}`} className="edit">Edit
          </Link>
          <Link to="#" className="delete" onClick={() => deleteUser(element._id)}> Delete
          </Link>
          </div>

        </div>

</>
)
}) : <div className='no_data text-center'>NO Data Found</div>
}
</div>
<br/>
</>
)
}

export default About
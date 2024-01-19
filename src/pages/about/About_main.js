import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,variant} from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.css';
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import About from '../../components/usermanagment/about/About';
import { useHistory } from "react-router-dom"
import { addData , dltdata, updateData} from '../../components/usermanagment/context/ContextProvider';
import {usergetfunc,deletfunc,exporttocsvfunc} from "../../userMGMservice/Apis";
import Alert from 'react-bootstrap/Alert';
import "./about.css"
import { toast } from 'react-toastify';
const About_main = () => {
  
  const [userdata,setUserData] = useState([]);
  const [search,setSearch] = useState("");
  const [gender,setGender] = useState("All");
  const [status,setStatus] = useState("All");
  const [sort,setSort] = useState("new");
  const [page,setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0);
  const { useradd, setUseradd } = useContext(addData);
  const {update,setUpdate} = useContext(updateData);
  const {deletedata, setDLtdata} = useContext(dltdata);
  const navigate = useHistory();
  const adduser = () => {
    navigate.push("/add_about")
  }
  // get user
  const userGet = async()=>{
    const response = await usergetfunc(search,gender,status,sort,page);
    if(response.status === 200){
      setUserData(response.data.usersdata);
      setPageCount(response.data.Pagination.pageCount)
    }else{
      console.log("error for get user data")
    }
  }

  // user delete
  const deleteUser = async(id)=>{
    const response = await deletfunc(id);
    if(response.status === 200){
      userGet();
      setDLtdata(response.data)
    }else{
      toast.error("error")
    }
  }
  useEffect(()=>{
    userGet();
    setTimeout(()=>{
    },1200)
  },[search,gender,status,sort,page])

  return (
    <>
    <Topbar/>
    <br></br>
    {
      useradd ?  <Alert variant="success" onClose={() => setUseradd("")} dismissible>{useradd.fname.toUpperCase()} Succesfully Added</Alert>:""
    }

    {
      update ? <Alert variant="primary" onClose={() => setUpdate("")} dismissible>{update.fname.toUpperCase()} Succesfully Update</Alert>:""
    }

    {
      deletedata ? <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>{deletedata.fname.toUpperCase()} Succesfully Delete</Alert>:""
    }

      <div className="container">
        <div className="main_div">
          {/*  add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}> <i class="fa-solid fa-plus"></i>&nbsp; add  </Button>
            </div>
          </div>
        </div>
        {
          <About
            userdata={userdata}
            deleteUser={deleteUser}
            userGet={userGet}

          />
        }

      </div>
      <Footer/>
    </>
  )
}

export default About_main
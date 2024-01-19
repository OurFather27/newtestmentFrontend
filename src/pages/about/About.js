import React, { useContext, useEffect, useState } from 'react'
import {registerfunc} from "../../userMGMservice/Apis"
import { ToastContainer, toast } from "react-toastify"
import {useHistory} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { addData } from '../../components/usermanagment/context/ContextProvider';

// Add more abouts
const About = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname:""
  });
const [image, setImage] = useState("");
const [preview, setPreview] = useState("");
const navigate = useHistory();
const { useradd, setUseradd } = useContext(addData);
  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }
  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }

  //submit userdata
  const submitUserData = async(e) => {
    e.preventDefault();
const { fname ,lname} = inputdata;
const data = new FormData();
  data.append("fname",fname)
  data.append("lname",lname)
  data.append("user_profile",image)

      const config = {
        "Content-Type":"multipart/form-data"
      }

      const response = await registerfunc(data,config);
      
      if(response.status === 200){
        setInputData({
          ...inputdata,
          fname:"",
          lname:""
        });
        setImage("");
        setUseradd(response.data)
        navigate.push("/about");
      }else{
        toast.error("Error!")
      }
  }

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }

    setTimeout(() => {
    }, 1200)
  }, [image])


  return (
    <>
      {

       <div className="container">
              <img src={preview ? preview : "/man.png"} alt="img" />
            <form>
                  <p>First name</p>
                  <textarea type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder='Enter FirstName' />
                  <p>last name</p>
                  <textarea type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder='Enter last name' />
                  <p>Select Your Profile</p>
                  <input type="file" name='user_profile' onChange={setProfile} placeholder='Select Your Profile' />
                <button variant="primary" type="submit" onClick={submitUserData}>
                  Submit
                </button>

            </form>
        </div>
      }

    </>
  )
}

export default About
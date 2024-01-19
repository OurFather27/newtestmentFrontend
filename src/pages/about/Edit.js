import React, { useContext, useEffect, useState } from 'react'

import { singleUsergetfunc,editfunc } from '../../userMGMservice/Apis';
import { useHistory, useParams } from 'react-router-dom';
import { updateData } from '../../components/usermanagment/context/ContextProvider';
import { ToastContainer, toast } from "react-toastify"
import { BASE_URL } from '../../userMGMservice/helper';
import "./about.css"
const Edit = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname:""
  });
  const [imgdata,setImgdata] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const {update,setUpdate} = useContext(updateData)
 const navigate = useHistory();
  const {id} = useParams();
  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }

  const userProfileGet = async()=>{
    const response = await singleUsergetfunc(id);    
    if(response.status === 200){
      setInputData(response.data)
      setImgdata(response.data.profile)
    }else{
      console.log("error");
    }
  }
  //submit userdata
  const submitUserData = async(e) => {
    e.preventDefault();

    const { fname ,lname} = inputdata;
      
      const data = new FormData();
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("user_profile",image || imgdata)

      const config = {
        "Content-Type":"multipart/form-data"
      }

      const response = await editfunc(id,data,config);
      
      if(response.status === 200){
        setUpdate(response.data)
        navigate.push("/about")
      }
  }

  useEffect(()=>{
    userProfileGet();
  },[id])

  useEffect(() => {
    if (image) {
      setImgdata("")
      setPreview(URL.createObjectURL(image))
    }
    setTimeout(() => {
    }, 1200)
  }, [image]);

  return (
    <>
      {
         <div className="container">
          
            <div className="profile_div text-center">
              <img src={image ? preview : `${BASE_URL}/uploads/${imgdata}`} alt="img" />
            </div>
            <form>
                  <p>First name</p>
                  <textarea type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder='Enter FirstName' />   
                    <p>lname name</p>
                  <textarea type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder='Enter lname' />              
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

export default Edit
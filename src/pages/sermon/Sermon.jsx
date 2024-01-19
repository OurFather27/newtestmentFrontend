import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Youtube from "../../components/youtube/Youtube"
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"

export default function Minstery  (){
    return(
    <div>
    <Topbar/>
    <Youtube/>
    <Footer/>
    </div>
) 
}




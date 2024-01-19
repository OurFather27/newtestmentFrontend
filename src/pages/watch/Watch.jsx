import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './watch.css'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom";
import Youtube from "../../components/youtube/Youtube"

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(15 26 63)" }}
      onClick={onClick}
    />
  );
}


function Watch (){
          var settings = {
      dots: true,
      autoplay:false,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2 
          }
        },
        
      ]
    };
  const API ="AIzaSyDNJg_eDMvqrOMw1jouynPopCmFAkyCaUI"
  const channelId ="UCc2crTFxw5qI6a96mt5IMqg"
  var fetchurl =`https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [posts, setPosts ] = useState([]);
  const [allvideos, setAllvideos]= useState([])


  useEffect(() => {
   fetch(fetchurl).then((response)=>response.json()).then((resJson)=>{
    const result = resJson.items.map(doc=>({
      ...doc,
      Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
    }));
    setAllvideos(result)      
   })
  }, []);
  console.log(allvideos)

    useEffect(() => {
    const fetchPosts = async () => {
      const res =  await axios.get("https://marsilapi.onrender.com/api/posts");
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, []);

  return (
    <>
    {/*<Topbar/>*/}
        <div className="Header_container_main">
        <div className="header_container">
            <div className="headerbg"></div>

        
        <header className="">
        <h1>God is for you,<br/>
            and so are we.
        </h1>
        <div className="header_video_box">
        <video className="" src="./yoni.mp4" loop autoPlay muted></video>
        </div>
        </header>
        </div>
      </div>


{/*middle page */}
      <div className="middlePage">
      <div className="middlePage_2">
        <div className="middlePage_continaer">
          <div className="middlePage_box">
          <h2>Sundays Service</h2>
          <p>We are a community following Jesus, making him known and seeking renewal in London. 
          Each Sunday we gather together at Central Foundation Boys School at 11am and we’d love to have you join us.</p>
            
          </div>
        </div>
        <div className="middlePage_continaer">
          <img className="middleImage"src="./sundayService.png"/>
        </div>
        </div>
      </div>
      <div className="middlePage">
      <div className="middlePage_2">
        <div className="middlePage_continaer">
          <div className="middlePage_box">
          <h2>Sundays Service</h2>
          <p>We are a community following Jesus, making him known and seeking renewal in London. 
          Each Sunday we gather together at Central Foundation Boys School at 11am and we’d love to have you join us.</p>
            
          </div>
        </div>
        <div className="middlePage_continaer">
          <img className="middleImage"src="./sundayService.png"/>
        </div>
        </div>
      </div>
            <div className="middlePage">
      <div className="middlePage_2">
        <div className="middlePage_continaer">
          <div className="middlePage_box">
          <h2>Sundays Service</h2>
          <p>We are a community following Jesus, making him known and seeking renewal in London. 
          Each Sunday we gather together at Central Foundation Boys School at 11am and we’d love to have you join us.</p>
            
          </div>
        </div>
        <div className="middlePage_continaer">
          <img className="middleImage"src="./sundayService.png"/>
        </div>
        </div>
      </div>
            <div className="middlePage">
      <div className="middlePage_2">
        <div className="middlePage_continaer">
          <div className="middlePage_box">
          <h2>Sundays Service</h2>
          <p>We are a community following Jesus, making him known and seeking renewal in London. 
          Each Sunday we gather together at Central Foundation Boys School at 11am and we’d love to have you join us.</p>
            
          </div>
        </div>
        <div className="middlePage_continaer">
          <img className="middleImage"src="./sundayService.png"/>
        </div>
        </div>
      </div>
           {/* <div className="mainContainer">
     <div className="container">
      <Slider {...settings}>
      {allvideos.map((item)=>{

        return(
          <div>

          <Link to="/minstery">
          <img src={item.snippet.thumbnails.high.url} width="300px"/>
           </Link>
      <p>{item.snippet.title}</p>
          </div>
          );

      })}
      </Slider>
      </div>     
</div>*/}
            <Youtube/>
          
 </>
  );
}

export default Watch
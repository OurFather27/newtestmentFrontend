import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react"

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

function Course(props) {
   var settings = {
      dots: true,
      autoplay:true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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

  const {coursename}= useParams();
  const [Courses, setCourses] = useState([])

  useEffect(()=>{
    //kalhon hulunm youtube lay yaluten playlist fetch adergo database lay save maderg kezan save yetergewn meterat
    let playlistid=""
    if(coursename=="reactjs"){
      playlistid="PLQ7HWqd0j1-m8QrtUxGT45_xzxlYM9As2" 
    }else{
      playlistid="PLQ7HWqd0j1-lrTG80Y32qCSjKjMrdDN8A"
    }
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=${playlistid}&key=AIzaSyA6KSVdV6-6ga34P1HLER42f7LCPSf__5E`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
    const result = data.items.map(item=>{
         console.log(item.snippet.title,item.contentDetails.videoId,item.snippet,thumb)
        return{title:item.snippet.title,video:item.contentDetails.videoId,thumb:item.snippet.thumbnails}
      })
    setCourses(result)
    idvideo(result[0].video)
    idtitle(result[0].title)
    idthumbails(result[0,thumb])
    })
  },[])

  const [video,idvideo] =useState("")
  const [title,idtitle] =useState("")
  const [thumb,idthumbails]=useState("")
  const [counter, setCounter]= useState(0) //click yetedergew lay 
  const renderVideo =()=>{
    return(
      <>

      <div className="video-container">
        <iframe width="853" height="480" src={"//www.youtube.com/embed/"+video+"?rel=0"} 
        frameBorder="0" allowFullScreen></iframe>
      </div>
 <p>{title}</p>

        </>
      )
  }
  return (
    <>  
       {Courses.length> 0 ?
    <div>
       {renderVideo()}
             
    <ul className="collection">
    <div className="mainContainer">
     <div className="container">
    <Slider {...settings}>
       {

    Courses.map((item,index)=>{
    return <Link Key={item.video}className={counter===index ?"collection-item " : "collection-item"}onClick={()=>{
      idvideo(item.video)
      idtitle(item.title)
      idthumbails(item.thumb)
      setCounter(index)
    }}>

    <div>
      <img src={item.thumb.high.url} width="300px"/>
      <p>{item.title}</p>

    </div>
    </Link>

    })  }
  </Slider>
</div>     
</div>
    </ul>

    </div>
    :
    <h1>Loading...</h1>
    }
    </>
    );
    }

export default Course;
 
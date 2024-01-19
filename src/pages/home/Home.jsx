import Topbar from "../../components/topbar/Topbar";
// import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer"
import Watch from "../../pages/watch/Watch"
import "./home.css"
import Youtube from "../../components/youtube/Youtube"
export default function Home() {
  return (
    <>
      <Topbar />

      <Watch/>
      {/*<Youtube/>*/}
      <Footer/>
      {/*<Feed/>*/}
    </>
  );
}

import res1 from "../assets/images/Rest/res1.jpg"
import res2 from "../assets/images/Rest/res2.jpg"
import res3 from "../assets/images/Rest/res3.jpg"
import res4 from "../assets/images/Rest/res4.jpg"
import res5 from "../assets/images/Rest/res5.jpg"
import res6 from "../assets/images/Rest/res6.jpg"
import res7 from "../assets/images/Rest/res7.jpg"
import res8 from "../assets/images/Rest/res8.jpg"
import res9 from "../assets/images/Rest/res9.jpg"
import res10 from "../assets/images/Rest/res10.jpg"
import res11 from "../assets/images/Rest/res11.jpg"
import res12 from "../assets/images/Rest/res12.jpg"
import res13 from "../assets/images/Rest/res13.jpg"
import res14 from "../assets/images/Rest/res14.jpg"

import con1 from "../assets/images/Concert/Con1.jpg"
import con2 from "../assets/images/Concert/Con2.jpg"
import con3 from "../assets/images/Concert/Con3.jpg"
import con4 from "../assets/images/Concert/Con4.jpg"
import con5 from "../assets/images/Concert/Con5.jpg"
import con6 from "../assets/images/Concert/Con6.jpg"
import con7 from "../assets/images/Concert/Con7.jpg"
import con8 from "../assets/images/Concert/Con8.jpg"
import con9 from "../assets/images/Concert/Con9.jpg"
import con10 from "../assets/images/Concert/Con10.jpg"
import con11 from "../assets/images/Concert/Con11.jpg"
import con12 from "../assets/images/Concert/Con12.jpg"
import con13 from "../assets/images/Concert/Con13.jpg"
import con14 from "../assets/images/Concert/Con14.jpg"

import Parallex from "../components/Parallex"
import GalleryCard from "../components/GalleryCard"
function Home() {
  const galleryData = [
    { imageSrc: res1 },
    { imageSrc: res2 },
    { imageSrc: res3 },
    { imageSrc: res4 },
    { imageSrc: res5 },
    { imageSrc: res6 },
    { imageSrc: res7 },
    { imageSrc: res8 },
    { imageSrc: res9 },
    { imageSrc: res10 },
    { imageSrc: res11 },
    { imageSrc: res12 },
    { imageSrc: res13 },
    { imageSrc: res14 },
    { imageSrc: con1 },
    { imageSrc: con2 },
    { imageSrc: con3 },
    { imageSrc: con4 },
    { imageSrc: con5 },
    { imageSrc: con6 },
    { imageSrc: con7 },
    { imageSrc: con8 },
    { imageSrc: con9 },
    { imageSrc: con10 },
    { imageSrc: con11 },
    { imageSrc: con12 },
    { imageSrc: con13 },
    { imageSrc: con14 },
    
  ];
  return (
    <div>
      <Parallex/>
      <GalleryCard data={galleryData}/>
    </div>
  );
}

export default Home;
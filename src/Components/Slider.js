import React from "react";
import Styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../Assets/images/slider1.jpg";
import Slider2 from "../Assets/images/slider2.jpg";
import Slider3 from "../Assets/images/slider3.jpg";
import Slider4 from "../Assets/images/slider4.jpg";
import Slider5 from "../Assets/images/slider6.jpg";
import Slider6 from "../Assets/images/slider7.jpg";
import Slider7 from "../Assets/images/slider8.jpg";

function ImageSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={Slider1} />
      </Wrap>
      <Wrap>
        <img src={Slider2} />
      </Wrap>
      <Wrap>
        <img src={Slider3} />
      </Wrap>
      <Wrap>
        <img src={Slider4} />
      </Wrap>
      <Wrap>
        <img src={Slider5} />
      </Wrap>
      <Wrap>
        <img src={Slider6} />
      </Wrap>
      <Wrap>
        <img src={Slider7} />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = Styled(Slider)`
   .slick-list{
     overflow: visible;
   }


   .slick-prev{
         left: 25px;
    }

    .slick-next{
        right: 25px;
    }

   button{
     z-index: 1;
   }
`;

const Wrap = Styled.div`
   img{
     width: 100%;
     height: 100%;
     transition-duration: 300ms;
   }
`;

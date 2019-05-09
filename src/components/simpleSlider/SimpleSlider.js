import Slider from "react-slick";
import images from '../gallery/assets/images';
import "./simpleSlider.scss";


export class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {images.map((img, index) => (<div key={index}><img src={img} alt=""/></div>))}
      </Slider>
    );
  }
}

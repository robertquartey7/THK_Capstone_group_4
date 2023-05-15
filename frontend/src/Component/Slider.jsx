import Slider from "react-slick";
import "../slider.css"

export default function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          {/* <h3>1</h3> */}
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

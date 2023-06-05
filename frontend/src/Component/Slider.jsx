import Slider from "react-slick";
import "../slider.css";

export default function MultipleItems(props) {
 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h2 className=""> {props.props.data.category} </h2>
      <Slider {...settings}>
        {props.props.data.map((item) => (

          <div className="shadow-xl p-1 ">
            <div className="relative">
              <img className="" src={item.imageUrl} />
              <span className="absolute top-2 right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>

            <div className="flex flex-col">
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

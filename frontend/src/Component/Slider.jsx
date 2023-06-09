import Slider from "react-slick";
import "../slider.css";

export default function MultipleItems({props, addOrder, setOrderClick, orderClick}) {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold pl-10 mb-10">
        {" "}
        {props.category}{" "}
      </h2>
      <div>
        <Slider {...settings}>
          {props.stores.map((item) => (
            <div
              key={item.id}

              className="hover:shadow-2xl p-1 px-5 transition-all duration-200"
            >
              <div className="relative">
                <img className="" src={item.imageUrl} />
                <span className="absolute top-2 right-3 hover:bg-red-900 rounded-full hover:text-white cursor-pointer" onClick={()=>{
                  addOrder(item.id)
                  
                  orderClick===true? setOrderClick(false) : setOrderClick(true)
                }}>
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
    </div>
  );
}

import MultipleItems from "../Component/Slider";

function Product() {
  return (
    <div>
      <div>
        <span>name</span>
        <span>cart</span>
      </div>

      <div>
        <MultipleItems />
        <MultipleItems />
        <MultipleItems />
      </div>
    </div>
  );
}

export default Product;

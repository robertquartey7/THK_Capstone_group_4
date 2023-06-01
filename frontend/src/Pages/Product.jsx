import { useParams } from "react-router-dom";
import MultipleItems from "../Component/Slider";
import { fetcher } from "../utlis/dataFetch";
import useSWR from "swr";

function Product() {
  const { id } = useParams();

  const { data, error, isLoading, isValidating } = useSWR(
    `/v1/store/${id}/items?group=true`,
    fetcher
  );

  if (isLoading) {
    return <isLoading />;
  }
  if (data.data.length === 0) {
    return <div>No products</div>;
  }

  if (data) {
    console.log(data);
    return (
      <div>
        <div className="w-screen">
          <img
            src={data.data[0].store?.imageUrl}
            alt=""
            className="w-full h-40"
          />
        </div>
        <div>
          <span>{data.data[0].store?.name}</span>
          <span>cart</span>
        </div>

        <div>
          {data.groupBy.forEach((element) => {})}
          <MultipleItems props={data} />
          <MultipleItems props={data} />
          <MultipleItems props={data} />
        </div>
      </div>
    );
  }
}

export default Product;

import "./Body.css";
import data from "./data.json";
import SingleItem from "./SingleItem";
export default function Body() {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="items">
          {data.map((items)=>{
            return <SingleItem title={items.title} img={items.img} price={items.price} />
          })}
        </div>
      </div>
      <div className="orderSummary">
        <p className="orderSummarySub">Order Summary</p>
        <div className="CalcTotal">
          <div className="subtotal">
            <p className="subtotalHeading">Subtotal</p>
            <p>$12,500</p>
          </div>
          <div className="subtotal">
            <p className="subtotalHeading">Discount(10%)</p>
            <p>-$1,452</p>
          </div>
        </div>
        <div className="totalSum">
          <div className="total">
            <p className="totalHeading">Total</p>
            <p>$11,111</p>
          </div>
        </div>
      </div>
    </div>
  );
}

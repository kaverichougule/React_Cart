import "./Body.css";
import data from "./data.json";
import SingleItem from "./SingleItem";
import { useState } from "react"; 
export default function Body() {
  const [totalPrice, setTotalPrice] = useState(2199.96);
  const [cartItems, setCartItems] = useState(data);
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);
  let [discount,setDiscount]=useState((totalPrice*10)/100);
  let [MainTotal,setMainTotal]=useState(totalPrice-discount);
  function handleUpdateTotal(title, newCount) {
    // Update the count for the specific item
    const updatedCartItems = cartItems.map((item) =>
      item.title === title ? { ...item, count: newCount } : item
    );

    // Recalculate the total price
    const newTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );

    // Update both the cart items and total price
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
    setDiscount((totalPrice*10)/100)
    setMainTotal(totalPrice-discount)
  }

  function handleRemoveItem(title, count) {
    // Remove the item from the cartItems state based on the title and count
    const updatedCartItems = cartItems.filter(
      (item) => !(item.title === title && item.count === count)
    );
    setCartItems(updatedCartItems);

    // Recalculate the total price
    const newTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    setTotalPrice(newTotalPrice);

    // Check if the cart is empty
    setIsCartEmpty(updatedCartItems.length === 0);
  }

  function clearCart() {
    // Clear the cart and update total price
    setCartItems([]);
    setTotalPrice(0);
    setIsCartEmpty(true);
  }
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="items">
          {cartItems.map((items) => {
            return (
              <SingleItem
                title={items.title}
                img={items.img}
                price={items.price}
                onRemove={handleRemoveItem}
                onUpdateTotal={handleUpdateTotal}
                count={items.count}
              />
            );
          })}
        </div>
      </div>
      <div className="orderSummary">
        <p className="orderSummarySub">Order Summary</p>
        <div className="CalcTotal">
          <div className="subtotal">
            <p className="subtotalHeading">Subtotal</p>
            <p>$
            {("" + totalPrice).substring(
              0,
              ("" + totalPrice).indexOf(".") + 3
            )}</p>
          </div>
          <div className="subtotal">
            <p className="subtotalHeading">Discount(10%)</p>
            <p>${
              (""+discount).substring(0,(""+discount).indexOf(".")+3)
            }</p>
          </div>
        </div>
        <div className="totalSum">
          <div className="total">
            <p className="totalHeading">Total</p>
            <p>
              $
              {("" + MainTotal).substring(
                0,
                ("" + MainTotal).indexOf(".") + 3
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./Body.css";
import {useState,useEffect} from 'react';
export default function SingleItem(props){
    let [count, setCount] = useState(props.count);

  useEffect(() => {
    // Update the count when the props.count changes
    setCount(props.count);
  }, [props.count]);

  function increaseCount() {
    setCount(count + 1);
    props.onUpdateTotal(props.title, count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
        const newCount = count - 1;
  
        // If the count reaches 0, remove the item immediately
        if (newCount === 0) {
          props.onRemove(props.title, 1);
        } else {
          setCount(newCount);
        }
      }
  }

  function removeItem() {
    // Call the onRemove callback with the item's title and count
    props.onRemove(props.title, count);
  }

  // Add a function to update the total price in the parent component
  function updateTotalPrice(newCount) {
    // Calculate the new total price based on the updated count
    const newTotalPrice = newCount * props.price;
    // Call a callback function to update the total price in the parent component
    props.onUpdateTotal(newTotalPrice);
  }
    return(
        <div className="singleItem">
            <div className="singleItemInfo">
              <img
                src={props.img}
                className="ProductImg"
                alt=""
              />
              <div className="productName">
                <p>{props.title}</p>
                <p>${props.price}</p>
              </div>
            </div>

            <div className="quantity">
              <div className="trash" onClick={removeItem}>
                <i class="fa-solid fa-trash"></i>
              </div>
              <div className="Subquantity">
                <div className="IncreaseBtn" onClick={()=>{
                    increaseCount()
                    
                }}>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <p >{count}</p>
                <div className="DecreaseBtn" onClick={()=>{
                    decreaseCount(); 
                    
                }}>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
        </div>
    );
}
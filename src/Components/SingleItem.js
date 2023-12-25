import "./Body.css";
import {useState} from 'react';
export default function SingleItem(props){
    let [Increasecount,setInc]=useState(1);
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
                <p>{props.price}</p>
              </div>
            </div>

            <div className="quantity">
              <div className="trash">
                <i class="fa-solid fa-trash"></i>
              </div>
              <div className="Subquantity">
                <div className="IncreaseBtn">
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <p>1</p>
                <div className="DecreaseBtn">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
        </div>
    );
}
import "./Header.css";

export default function Header(){
    return(
        <nav>
            <div className="navbar">
                <p>UseReducer</p>
                <div className="cartIcon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className="itemsQ">
                        <p>4</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
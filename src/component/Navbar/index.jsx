import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../../context/Context';
import './navbar.css'
import Delete from '../../image/delete.png';
import { Link } from 'react-router-dom'
const Navbar = () => {

    const {
        state: { cart },
        dispatch
    } = CartState();

    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <div >
                        <a style={{ marginLeft: '22px' }} className="navbar-brand" href="/">RaviShop [Ecart]</a>

                    </div>

                    <div className="btn-group dropstart">
                        <button style={{ marginRight: '24px' }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                            <FaShoppingCart />
                            <span className="position-absolute top-0  right-200 translate-middle badge rounded-pill bg-danger">

                                <badge>{cart.length}</badge>

                            </span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {cart.map((prod) => (
                                <span className="cartitem" key={prod.id}>
                                    <img
                                        src={prod.image}
                                        className="cartItemImg"
                                        alt={prod.name}
                                    />
                                    <div className="cartItemDetail">
                                        <span>{prod.name}</span>
                                        <span>₹ {prod.price.split(".")[0]}</span>
                                    </div>
                                    <img src={Delete} alt='' style={{ cursor: 'pointer' }} onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                    } />
                                </span>
                            ))}
                            <Link to="/cart">
                                <button class="btn btn-outline-primary" style={{ width: "95%", margin: "0 10px" }}>
                                    Go To Cart
                                </button>
                            </Link>

                        </ul>
                    </div>



                </div>
            </nav>
        </>
    )
}

export default Navbar
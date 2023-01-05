import React from 'react'
import { CartState } from '../../context/Context'
import './singleproduct.css'
const Singleproduct = ({ prod }) => {
  const { state:
    { cart },
    dispatch } = CartState()


  return (
    <>

      <div className="card" >
        <img src={prod.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          {prod.fastDelivery ? (
            <p>Fast Delivery</p>
          ) : (
            <p>4 Days Delivery</p>

          )}
          {prod.inStock} Products
          <div className='btnWrapper d-flex'>
            <button type="button" class="btn btn-outline-primary  "> {prod.price}</button>

            {cart.some((p) => p.id === prod.id) ? (
              <button class="btn btn-danger btn-sm"
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button class="btn btn-primary "
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
                disabled={!prod.inStock}
              >
                {!prod.inStock ? "Out of Stock" : "Add to Cart"}
              </button>
            )}
          </div>

        </div>

      </div>
    </>
  )
}

export default Singleproduct
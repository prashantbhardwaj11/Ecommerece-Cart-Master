import './filter.css'
import { CartState } from '../../context/Context'

const Filter = () => {

  const {
    productDispatch,
    productState: { z, byFastDelivery, sort },
  } = CartState();

  // make state for rating

  return (

    <div className="container">
      <div className='filterContainer'>
        <div className='row'>

          <div className='col-md-3' >
            <input type="checkbox" id="vehicle1" name="Assending" value="Assending" onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
              checked={sort === "lowToHigh" ? true : false} />

            <label className='text' for="Assending" >  Assending</label>
          </div>
          <div className='col-md-3'>
            <input type="checkbox" id="vehicle1" name="Assending" value="Assending"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
            <label className='text' for="Assending"> Desending</label>
          </div>
          <div className='col-md-3'>
            <input type="checkbox" id="vehicle1" name="Assending" value="Assending"
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_STOCK",
                })
              }
              checked={z} />
            <label className='text' for="Assending"> Stock</label>
          </div>
          <div className='col-md-3'>
            <input type="checkbox" id="vehicle1" name="Assending" value="Assending"
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked={byFastDelivery} />
            <label className='text' for="Assending"> Fast Delivery</label>
          </div>



        </div>
        <button
          class='btn btn-primary'
          variant="light"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </button>
      </div>

    </div>
  );
};

export default Filter;

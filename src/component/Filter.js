//import React from 'react'
import { Button,Form } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from '../context/Context';
import "./slider.css"

const Filter = () => {

    //const [rate, setRate] = useState();

    const { productState:{
      byStock, byFastDelivery, sort, byRating ,searchQuery
    }, productDispatch, } = CartState();

console.log(byStock, byFastDelivery, sort, byRating,searchQuery)

  return (
    <div className='filters fixed-sidebar'>
    <span className='title'>Filter Products</span>
      <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onClick={()=> 
              productDispatch({
                type:"SORT_BY_PRICE",
                payload: "lowToHigh",
          })
        }
        checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onClick={()=> (
              productDispatch({
                type:"SORT_BY_PRICE",
                payload: "highToLow",
          })
          )
        }
        checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
            inline
            label="Include Out of Stocks"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onClick={(i)=> (
              productDispatch({
                type:"FILTER_BY_STOCK",
          })
          )
        }
        checked={byStock}
        />
      </span>
      <span>
        <Form.Check
            inline
            label="Fast Delivery Only"
            name="group18"
            type="checkbox"
            id={`inline-4`}
            onClick={()=> (
              productDispatch({
                type:"FILTER_BY_DELIVERY",
          })
          )
        }
        checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{paddingRight:10}}>Ratings:</label>
        <Rating rating={byRating} 
        onClick={(i)=> 
          productDispatch({
            type:"FILTER_BY_RATING",
            payload: i + 1,
          })
        }
        // style={{cursor: "pointer" }} 
        />
      </span>
      <Button 
      onClick={()=> (
          productDispatch({
            type:"CLEAR_FILTERS"
          })
          )
        }
      variant="light">Clear Filters</Button>
    </div>
  )
}

export default Filter

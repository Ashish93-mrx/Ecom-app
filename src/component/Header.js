import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';
import "./style.css";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {

  const {
    state:{ cart },
    dispatch,
    productDispatch
  }= CartState();

  return (
    <Navbar className="fixed-top" bg="dark" variant='dark' style={{ height:80}} >
        <Container style={{flexWrap:"wrap"}}> 
          <Navbar.Brand>
            <Link to="/">Shop-karo</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl style={{width:500, left:0}}
            placeholder='search a product'
            className='m-auto'
            onChange={(e)=> {
          productDispatch({
            type:"FILTER_BY_SEARCH",
            payload:  e.target.value,
          });
          }}
            />
          </Navbar.Text>
          <Nav style={{alignRight:0}}>
          {/* <div style={{ display:"flex", flexDirection: 'row',right:"0"}}> */}
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              
              <Dropdown.Menu style={{ minWidth:370 , left: '-280px' }} drop="left">
              { cart.length>0 ? (
                <>
                  {  cart.map((pd)=>(
                      <span className="cartitem" key={pd.id}>
                        <img
                          src={pd.image}
                          className="cartItemImg"
                          alt={pd.name}
                          />
                          <div className="cartItemDetail">
                            <span>{pd.name}</span>
                            <span>Rs.{pd.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer"}}
                          onClick={()=>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: pd,
                          })
                        } 
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
                ) : (
                  <span style={{padding:10}}>Cart is Empty!</span>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            
          </Nav>
        </Container> 
      </Navbar>
  );
};

export default Header;

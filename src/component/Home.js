import { CartState } from '../context/Context'
import Singleproduct from './Singleproduct';
import Filter from './Filter';
//import './style.css'
import Imageslider from './Imageslider';

const Home = () => {

  const { 
    state:{products},
    productState:{
        byStock, byFastDelivery, sort, byRating ,searchQuery
  }, } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if(sort) {
      sortedProducts = sortedProducts.sort((a,b) =>
        sort==="lowToHigh" ? a.price-b.price : b.price-a.price
    );
  }

  if(!byStock) {
    sortedProducts=sortedProducts.filter((a) => a.inStock);
  }

  if(byFastDelivery) {
    sortedProducts=sortedProducts.filter((a)=>a.fastDelivery);
  }

  if(byRating){
    sortedProducts=sortedProducts.filter((a)=>a.ratings === byRating
    );
  }

  if(searchQuery) {
    sortedProducts=sortedProducts.filter((a)=>
    a.name.toLowerCase().includes(searchQuery)
    );
  }

  return sortedProducts;
};

  console.log(products)
  return (
    // <div style={{ display: "flex", flexDirection: "column", marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
  


    <div className="home">
      <Filter/>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: '220px' }}>
      {/* <Imageslider /> */}
      <div className="productContainer">
        {
          transformProducts().map((prod)=>{
            return <Singleproduct prod={prod} key={prod.id}/>
          })
        }
      </div>
      </div>
    </div>
    //</div>
  )
}

export default Home;

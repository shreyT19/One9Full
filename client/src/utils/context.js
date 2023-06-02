import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  // For cart
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  //scroll to top

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  useEffect(() => {

    //cart icon count
    let count=0;
    cartItems.map(item=>(
      count+=item.attributes.quantity
    ))
    setCartCount(count);


    //cart subtotal
    let subTotal =0;
    cartItems.map(item=>(
      subTotal+=item.attributes.price * item.attributes.quantity
    ))
    setCartSubTotal(subTotal)

  }, [cartItems]);

  // Add items to Cart

  const handleAddToCart = (product, quantity) => {

    let items = [...cartItems];
    let indexOfItem = items.findIndex(pro=>pro.id===product.id);
    if(indexOfItem!==-1){ //agar humara product already exists krta hai cart mein
      items[indexOfItem].attributes.quantity=quantity;
    }else{ //agr nhi hai product
      product.attributes.quantity=quantity;
      items = [...items,product]
    }

    setCartItems(items)

  };

  //Remove Items from cart
  const handleRemoveFromCart = (product) => {
    let items =[...cartItems];
    let newFilteredItems = items.filter(pro=>pro.id!==product.id)
    setCartItems(newFilteredItems);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];

    let indexOfItem = items.findIndex(pro=>pro.id===product.id);
    if(type==="inc"){
      items[indexOfItem].attributes.quantity +=1;
    }else if(type==="dec"){
      if(items[indexOfItem].attributes.quantity===1) return;
      items[indexOfItem].attributes.quantity -=1;
    }

    setCartItems(items);

  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;

// import { createContext, useEffect, useContext, useReducer } from "react";

// // STEP 1
// export const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const CLEAR_CART = "CLEAR_CART";

// const cartReducer = (prevCart, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const { product, quantity } = action.payload;
//       const existingItem = prevCart.find(
//         (item) => item.productId === product.productId
//       );

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.productId === product.productId
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity }];
//     case REMOVE_FROM_CART:
//       return prevCart.filter(
//         (item) => item.productId !== action.payload.productId
//       );
//     case CLEAR_CART:
//       return [];
//     default:
//       return prevCart;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const initialCartState = (() => {
//     try {
//       const storedCart = localStorage.getItem("cart");
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (error) {
//       console.error("Failed to parse cart from localStorage:", error);
//       return [];
//     }
//   })();

//   const [cart, dispatch] = useReducer(cartReducer, initialCartState);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     } catch (error) {
//       console.error("Failed to save cart to localStorage:", error);
//     }
//   }, [cart]);

//   const addToCart = (product, quantity) => {
//     dispatch({ type: ADD_TO_CART, payload: { product, quantity } });
//   };

//   const removeFromCart = (productId) => {
//     dispatch({ type: REMOVE_FROM_CART, payload: { productId } });
//   };

//   const clearCart = () => {
//     dispatch({ type: CLEAR_CART });
//   };

//   // Calculate total quantity
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

//   // Calculate total price
//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.quantity * item.price,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         totalQuantity,
//         totalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// import { createContext, useEffect, useContext, useReducer } from "react";

// // STEP 1
// export const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// // Action types
// const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// const LOGOUT = "LOGOUT";

// const authReducer = (prevState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...prevState,
//         jwtToken: action.payload.jwtToken,
//         user: action.payload.user,
//         isAuthenticated: true,
//       };
//     case LOGOUT:
//       return {
//         ...prevState,
//         jwtToken: null,
//         user: null,
//         isAuthenticated: false,
//       };
//     default:
//       return prevState;
//   }
// };

// export const AuthProvider = ({ children }) => {
//   const initialAuthState = (() => {
//     try {
//       const jwtToken = localStorage.getItem("jwtToken");
//       const user = localStorage.getItem("user");
//       if (jwtToken && user) {
//         return {
//           jwtToken,
//           user: JSON.parse(user),
//           isAuthenticated: true,
//         };
//       }
//     } catch (error) {
//       console.error("Failed to load from localStorage:", error);
//     }
//     return {
//       jwtToken: null,
//       user: null,
//       isAuthenticated: false,
//     };
//   })();

//   const [authState, dispatch] = useReducer(authReducer, initialAuthState);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       if (authState.isAuthenticated) {
//         localStorage.setItem("jwtToken", authState.jwtToken);
//         localStorage.setItem("user", JSON.stringify(authState.user));
//       } else {
//         localStorage.removeItem("jwtToken");
//         localStorage.removeItem("user");
//       }
//     } catch (error) {
//       console.error("Failed to save to localStorage:", error);
//     }
//   }, [authState]);

//   // Action creators
//   const loginSuccess = (jwtToken, user) => {
//     dispatch({ type: LOGIN_SUCCESS, payload: { jwtToken, user } });
//   };

//   const logout = () => {
//     dispatch({ type: LOGOUT });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         jwtToken: authState.jwtToken,
//         user: authState.user,
//         isAuthenticated: authState.isAuthenticated,
//         loginSuccess,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

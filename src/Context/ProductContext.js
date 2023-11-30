import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const intialState={
  isloading:false,
  iserror:false,
  products:[],
  featureProducts:[]
}


const AppProvider = ({ children }) => {

  const[state,dispatch]=useReducer(ProductReducer,intialState);
  
  // fetch data from api start
  
  const getProducts = async(url)=>{
    dispatch({type:"API_LOADING"})
    try{
      const res=await axios.get(url);
      const products=await res.data;
      dispatch({type:"SET_API_DATA", payload:products})
    }
    catch(error){
      dispatch({type:"API_ERROR"})
    }
  }
  useEffect(() => {
    getProducts(API);
  }, [])
  
  // fetch data from api end

  
  console.log(state)
  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

const ProductReducer = (state,action) => {
    if(action.type === "API_LOADING"){
        return{
            ...state,
            isloading:true,
        }
    }
    console.log(state)
    if(action.type === "SET_API_DATA"){
        const featuredata=action.payload.filter((currelem)=>{
            return currelem.featured === true
        })
        return{
            ...state,
            isloading:false,
            products:action.payload,
            featureProducts:featuredata
        }
    }
    console.log(state)
    if(action.type === "API_ERROR"){
        return{
            ...state,
            iserror:true,
        }
    }
    return state;
}

export default ProductReducer
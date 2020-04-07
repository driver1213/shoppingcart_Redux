
let cartReducer = (state, action) => {

    //check if state exists
    if(state === undefined){
        state = {
            totalCost: 0,
            productCart: [
                {
                    productName: 'apples',
                    productPrice: 1
                }
            ]
        }
    }

    switch(action.type){
        case 'addProduct':
            return{
                ...state, 
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat(action.productData)
            }

        case 'deleteProduct':
            //[{}, {}, {}]
            let updatedArray = state.productCart.filter(productObj => {
                return productObj.productName != action.productData.productName
            })

            return{
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }

        default:
            return state;
    }



}

export default cartReducer
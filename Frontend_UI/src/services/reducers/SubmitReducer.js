
const intialState = {
    camels: [],
    camel: null,
    isCreated: false,
    isUpadated: false,
    isDelete: false,
    deleteId: null
}

const SubmitReducer = (state = intialState, action) => {
    switch (action.type) {

        case "view_camel_suc":
                return{
                    ...state,
                    camels: action.payload,
                    isCreated: false,
                    isUpadated: false,
                    isDelete: false,
                    deleteId: null,
                    camel: null
                }

        case "add_camel_suc":
            return{
                ...state,
                isCreated: true
            }

        case "single_camel_suc":
            return{
                ...state,
                camel: action.payload
            }

        case "upadate_camel_suc":
            return{
                ...state,
                isUpadated: true
            }

        case "delete_camel_conform":
            return{
                ...state,
                isDelete: true,
                deleteId: action.payload
            }

        case "delete_camel_suc":
            return{
                ...state,
                isDelete: false,
                deleteId: null
            }

        default:
            return state;
    }
}

export default SubmitReducer;
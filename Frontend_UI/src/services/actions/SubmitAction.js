import { ApiBaseURL } from "../helper/ApiBaseURL";

export const ViewCamelSuc = (data) => {
    return{
        type: 'view_camel_suc',
        payload: data
    }
} 

export const ViewCamelRej = (msg) => {
    return{
        type: 'view_camel_rej',
        payload: msg
    }
} 

export const AddCamelSuc = (data) => {
    return{
        type: 'add_camel_suc',
        payload: data
    }
} 

export const AddCamelRej = (msg) => {
    return{
        type: 'add_camel_rej',
        payload: msg
    }
} 

export const SingleCamelSuc = (data) => {
    return{
        type: 'single_camel_suc',
        payload: data
    }
}

export const SingleCamelRej = (msg) => {
    return{
        type: 'single_camel_suc',
        payload: msg
    }
}

export const UpadateCamelSuc = () => {
    return{
        type: "upadate_camel_suc",
    }
}

export const UpadateCamelRej = () => {
    return{
        type: "upadate_camel_rej",
    }
}

export const DeleteCamelConform = (id) => {
    return{
        type: "delete_camel_conform",
        payload: id
    }
}

export const DeleteCamelSuc = () => {
    return{
        type: "delete_camel_suc",
    }
}

export const ViewCamelAsync = () => {
    return disptch => {
        ApiBaseURL.get('/camels').then(res => {
            console.log("RES", res.data);

            disptch(ViewCamelSuc(res.data));
        }).catch(err => {
            console.log("ERR", err);
        })
    } 
}

export const AddCamelAsync = (data) => {
    return disptch => {
        ApiBaseURL.post('/camels', data).then(res => {
            console.log("RES", res);

            disptch(AddCamelSuc(res.data));
        }).catch(err => {
            console.log("ERR", err);
        })
    } 
}

export const SingleCamelAsync = (id) => {
    return disptch => {
        ApiBaseURL.get(`/camels/${id}`).then(res => {
            console.log("RES", res);

            disptch(SingleCamelSuc(res.data));
        }).catch(err => {
            console.log("ERR", err);
        })
    } 
}

export const UpadateCamelAsync = (data) => {
    return disptch => {
        ApiBaseURL.put(`/camels/${data.id}`, data).then(res => {
            console.log("RES", res.data);

            disptch(UpadateCamelSuc());
        }).catch(err => {
            console.log("ERR", err);
        })
    } 
}

export const DeleteCamelAsync = (id) => {
    return disptch => {
        ApiBaseURL.delete(`/camels/${id}`).then(res => {
            console.log("RES", res.data);

            disptch(ViewCamelAsync());
            disptch(DeleteCamelSuc());
        }).catch(err => {
            console.log("ERR", err);
        })
    } 
}
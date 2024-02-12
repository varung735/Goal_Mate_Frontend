import config from '../config/enviornment';
import CustomError from '../utils/customError';

const api_route = config.env === 'prod' ? config.api_route_prod : config.api_route_local;
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const apiRequests = {
    getRequest: async function (route){
        try {
            const response = await fetch(`${api_route}/${route}`, {
                method: 'GET',
                headers: headers,
                credentials: 'include'
            });

            const resData = await response.json();

            if(!resData.success){
                throw new CustomError(resData.message);
            }

            return resData;
        } catch (error) {
            console.error(error);
            throw new CustomError(error.message);
        }
    },
    postRequest: async function (route, body){
        try {
            const response = await fetch(`${api_route}/${route}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body),
                credentials: 'include'
            });
    
            const resData = await response.json();
    
            if(!resData.success){
                throw new CustomError(resData.message)
            }
    
            return resData;
        } catch (error) {
            console.error(error);
            throw new CustomError(error.message);
        }
    },
    putRequest: async function (route, body){
        try {
            const response = await fetch(`${api_route}/${route}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(body),
                credentials: 'include'
            });

            const resData = await response.json();

            if(!resData.success){
                throw new CustomError(resData.message);
            }

            return resData;
        } catch (error) {
            console.error(error);
            throw new CustomError(error.message);
        }
    },
    patchRequest: async function (route, body) {
        try {
            const response = await fetch(`${api_route}/${route}`, {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(body),
                credentials: 'include'
            });
    
            const resData = await response.json();
    
            if(!resData.success){
                throw new CustomError(resData.message);
            }
    
            return resData;
        } catch (error) {
            console.error(error);
            throw new CustomError(error.message);
        }
    },
    deleteRequest: async function (route, body) {
        try {
            const response = await fetch(`${api_route}/${route}`, {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(body),
                credentials: 'include'
            });
    
            const resData = await response.json();
    
            if(!resData.success){
                throw new CustomError(resData.message);
            }
    
            return resData;
        } catch (error) {
            console.error(error);
            throw new CustomError(error.message);
        }
    }
};

export default apiRequests;
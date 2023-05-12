import { Dispatch } from "redux";
import { MapsAction, MapsActionTypes } from "../../types/maps";
import ApiService from "../../api";

const Api = new ApiService();
export const getWeatherByCodes = (codes:number[]): any => {
    return async (dispatch: Dispatch<MapsAction>) => {
        try{
            if(codes) {
                dispatch({ type: MapsActionTypes.FETCH_MAPS })
                const response = await Api.getWeather(codes);
                if(response){
                dispatch({ type: MapsActionTypes.FETCH_MAPS_SUCCESS, payload: response})
                }
            }
        }catch(error) {
            dispatch({type: MapsActionTypes.FETCH_MAPS_ERROR, payload: 'loading error'});
        } 
    }
}

export const getCityCode = (name:string):any => {
    return async (dispatch:Dispatch<MapsAction>) => {
        try {
            const response = await Api.getCityCode(name);
            if(response) {
                dispatch({type:MapsActionTypes.ADD_MAP, payload:response})
            }
        }catch(error) {
            console.log(error)
        }
    }
}

export const deleteCity = (removeCode:number):any => {
    return (dispatch:Dispatch<MapsAction>) => {
        try {
            dispatch({type:MapsActionTypes.DELETE_MAP, payload: removeCode})
        }catch(error) {
            console.log(error)
        }
    }
}
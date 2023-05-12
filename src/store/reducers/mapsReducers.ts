import { MapsActionTypes, MapsState } from "../../types/maps"
import { MapsAction } from "../../types/maps"
// Todo update DEFAULT_CITY TO ARR INIT LOCAL STR
const DEFAULT_CITY = 703448;
const savedCityCodes = localStorage.getItem('CityCodes');
const getInitialCityCodes = ():number[] => {
    if(!savedCityCodes || !JSON.parse(savedCityCodes)) {
        return [DEFAULT_CITY]
    }
    return JSON.parse(savedCityCodes)
}

const initialState: MapsState = {
    data: [],
    codes:getInitialCityCodes(),
    loading:false,
    error:null
}

export const mapsReducer = (state:MapsState = initialState, action:MapsAction): MapsState => {
    switch (action.type){
        case MapsActionTypes.FETCH_MAPS:
            return {...state, loading:true}
        case MapsActionTypes.FETCH_MAPS_SUCCESS:
            return {...state, loading:false, data: action.payload}
        case MapsActionTypes.FETCH_MAPS_ERROR:
            return {...state, loading:false, error: action.payload}
        case MapsActionTypes.ADD_MAP:
            if(state.codes.includes(action.payload)){
                return state
            }
            const updatedCodes = [...state.codes, action.payload];
            localStorage.setItem('CityCodes', JSON.stringify(updatedCodes));
            return {...state, codes:updatedCodes}
        case MapsActionTypes.DELETE_MAP:
            // Todo: refilter
            const updatedCodesAfterRemove = state.codes.reduce((arr:number[], e) => {
            if(e != action.payload) {
                arr.push(e);
            }
            return arr;
            }, [])
            localStorage.setItem('CityCodes', JSON.stringify(updatedCodesAfterRemove))
            return {...state, loading:false, codes: updatedCodesAfterRemove}
        
        default:
            return state;
    }
}
export interface MapsState {
    data:any[],
    codes:number[],
    loading: boolean,
    error: null | string
}

export enum MapsActionTypes {
    FETCH_MAPS = "FETCH_MAPS",
    FETCH_MAPS_SUCCESS = "FETCH_MAP_SUCCESS",
    FETCH_MAPS_ERROR = "FETCH_MAPS_ERROR",
    ADD_MAP = "ADD_MAP",
    DELETE_MAP = "DELETE_MAP"
}

interface FetchMapsAction {
    type:MapsActionTypes.FETCH_MAPS;
}
interface FetchMapsSuccesAction {
    type:MapsActionTypes.FETCH_MAPS_SUCCESS;
    payload:any[];
}
interface FetchMapsErrorAction {
    type:MapsActionTypes.FETCH_MAPS_ERROR;
    payload:string;
}
interface AddMapsAction {
    type:MapsActionTypes.ADD_MAP;
    payload:number
}
interface DeleteMapsAction {
    type:MapsActionTypes.DELETE_MAP;
    payload:number;
}

export type MapsAction = FetchMapsSuccesAction | AddMapsAction | DeleteMapsAction | FetchMapsAction | FetchMapsErrorAction;
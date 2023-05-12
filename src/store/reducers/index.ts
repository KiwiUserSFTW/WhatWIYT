import { combineReducers } from "redux";
import { mapsReducer } from "./mapsReducers";
import { toolsReducers } from "./toolsReducers";
export const rootReducer = combineReducers({
    tools:toolsReducers,
    maps:mapsReducer
})


export type RootState = ReturnType<typeof rootReducer>
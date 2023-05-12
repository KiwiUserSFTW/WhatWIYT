import {ToolsActions, ToolsActionTypes, ToolsState } from "../../types/tools"

const initialState:ToolsState = {
    edit: false,
    load:true,
    dialogId: 0
}

export const toolsReducers = (state = initialState, action:ToolsActions):ToolsState => {
    switch(action.type) {
        case ToolsActionTypes.SET_EDIT :
            return {...state, edit: action.payload}
        case ToolsActionTypes.SET_LOADING : 
            return {...state, load: action.payload}
        case ToolsActionTypes.SET_DIALOG_ID :
            return {...state, dialogId:action.payload}
        default :
            return state
    }
}
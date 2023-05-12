import { Dispatch } from "redux"
import { ToolsActions, ToolsActionTypes } from "../../types/tools"

export const setLoading = (status:boolean):any => {
    return(dispatch:Dispatch<ToolsActions>) => {
        dispatch({type:ToolsActionTypes.SET_LOADING, payload:status})
    }
}

export const setEditing = (checked:boolean):any => {
    return(dispatch:Dispatch<ToolsActions>) => {
        dispatch({type:ToolsActionTypes.SET_EDIT, payload:checked})
    }
}

export const setDialogId = (id:number):any => {
    return(dispatch:Dispatch<ToolsActions>) => {
        dispatch({type:ToolsActionTypes.SET_DIALOG_ID, payload:id})
    }
}
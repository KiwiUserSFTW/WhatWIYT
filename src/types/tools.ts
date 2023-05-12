export interface ToolsState {
    edit:boolean;
    load:boolean;
    dialogId:number;
}

export enum ToolsActionTypes {
    SET_EDIT = "SET_EDIT",
    SET_LOADING = "SET_LOADING",
    SET_DIALOG_ID = "SET_DIALOG_ID",
}

interface SetEdit {
    type:ToolsActionTypes.SET_EDIT;
    payload:boolean;
}

interface SetLoading {
    type:ToolsActionTypes.SET_LOADING;
    payload:boolean;
}

interface setDiaogId {
    type:ToolsActionTypes.SET_DIALOG_ID;
    payload:number;
}
export type ToolsActions = SetEdit | SetLoading | setDiaogId;
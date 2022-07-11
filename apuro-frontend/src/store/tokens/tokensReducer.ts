import { Action } from "./actions";

export interface TokenState {
    token: string
}

const initialState = {
    token: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            console.log("CHEGOU NO ADD_TOKEN")
            console.log(state.token = action.payload)
            return { token: action.payload }
        }
        default:
            console.log("FOI PRA DEFAULT")
            return state
    }
}
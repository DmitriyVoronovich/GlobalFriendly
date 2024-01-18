const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: 1,
    email: '',
    login: '',
    isAuth: true
}

export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
};

type AuthReducerType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, email: string, login: string) =>
    ({
        type: SET_USER_DATA,
        payload: {
            data: {
                id, email, login
            }
        }
    } as const);

export const authReducer = (state: AuthType = initialState, action: AuthReducerType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state, ...action.payload.data, isAuth: true
            }
        }
        default:
            return state;
    }
};


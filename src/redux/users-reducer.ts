type UsersStateType = {
    users: UsersType[]
}

export type UsersType = {
    id: string
    photos: {
        small: any
        large: any
    }
    name: string
    status: string
    followed: boolean
}

type UsersReducerType = FollowACType
    | UnFollowACType
    | SetUsersACType;

const initialState = {
    users: []
};
export const usersReducer = (state: UsersStateType = initialState, action: UsersReducerType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.id ? {...item, followed: true} : item)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.id ? {...item, followed: false} : item)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state;
    }
};

type FollowACType = ReturnType<typeof followsAC>;

export const followsAC = (id: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            id
        }
    } as const
};

type UnFollowACType = ReturnType<typeof unFollowsAC>;

export const unFollowsAC = (id: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id
        }
    } as const
};

type SetUsersACType = ReturnType<typeof setUsersAC>;

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
};
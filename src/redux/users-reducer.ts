type UsersStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ReturnType<typeof toggleIsFetching>;

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};
export const usersReducer = (state: UsersStateType = initialState, action: UsersReducerType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.id ? {...item, followed: true} : item)
            }
        }
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.id ? {...item, followed: false} : item)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.payload.users]}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        default:
            return state;
    }
};

type FollowACType = ReturnType<typeof follow>;

export const follow = (id: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            id
        }
    } as const
};

type UnFollowACType = ReturnType<typeof unFollow>;

export const unFollow = (id: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id
        }
    } as const
};

type SetUsersACType = ReturnType<typeof setUsers>;

export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
};

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>;

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
};

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalUsersCount
        }
    } as const
};
export const toggleIsFetching = (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        payload: {
            isFetching
        }
    } as const);

type SideBarType = {
    id: number
    name: string
}

let initialState = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Kate'}
]

const sidebarReducer = (state: SideBarType[] = initialState, action: any) => {
return state
}

export default sidebarReducer;
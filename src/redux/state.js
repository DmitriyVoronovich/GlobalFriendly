export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 15},
            {id: 1, message: 'It\'s my first post!', like: 20}
        ]
    },
    dialogsPage: {
        dialog: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Oleg'},
            {id: 3, name: 'Kate'},
            {id: 4, name: 'Oly'},
            {id: 5, name: 'Igor'},
            {id: 6, name: 'Pavel'}
        ],
        message: [
            {id: 1, message: ' Hi, how are you?', you: true},
            {id: 2, message: 'Yo', you: false},
            {id: 3, message: 'GG', you: true},
            {id: 4, message: 'Oh, no', you: true},
            {id: 5, message: 'loser', you: false},
            {id: 6, message: 'fuck you', you: false}
        ]
    },
    sidbar: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Kate'}
    ]
}
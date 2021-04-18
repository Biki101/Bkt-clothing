const ININTIAL_STATE = {
    sections: [
        {
            title: 'HATS',
            imgURL: 'https://www.stylearena.net/wp-content/uploads/2014/11/woman-Korean-winter-wool-hat-scarf-cute-fur-ball-with-diamond-ear-warm-caps-Minimum-Order.jpg',
            id: 1,
            url: 'shop/hats'

        },
        {
            title: 'JACKETS',
            imgURL: 'https://www.bing.com/th?id=OIP.PW4sXPiKKQvIJmfDg5TV-AHaH8&w=155&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2',
            id: 2,
            url: 'shop/jackets'
        },
        {
            title: 'SNEAKERS',
            imgURL: 'https://th.bing.com/th/id/OIP.xpWsCyCDhugEiqB5bfkIRgHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
            id: 3,
            url: 'shop/sneakers'
        },
        {
            title: 'WOMEN',
            imgURL: 'https://th.bing.com/th/id/OIP.NkVMLtSrLi66jb9VZiW-MAHaE8?w=206&h=137&c=7&o=5&dpr=1.25&pid=1.7',
            size: 'large',
            id: 4,
            url: 'shop/women'
        },
        {
            title: 'MEN',
            imgURL: 'https://th.bing.com/th/id/OIP.pth0aW9imqk1XGGvB7bctQHaLF?pid=ImgDet&rs=1',
            size: 'large',
            id: 5,
            url: 'shop/men'
        }
    ]
}

const directoryReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
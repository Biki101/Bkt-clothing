import React from 'react';
import MenuItem from '../menu-items/menu-items';
import './directory-component.style.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imgURL: 'https://www.stylearena.net/wp-content/uploads/2014/11/woman-Korean-winter-wool-hat-scarf-cute-fur-ball-with-diamond-ear-warm-caps-Minimum-Order.jpg',
                    id: 1,
                    url: 'shop'

                },
                {
                    title: 'JACKETS',
                    imgURL: 'https://www.bing.com/th?id=OIP.PW4sXPiKKQvIJmfDg5TV-AHaH8&w=155&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2',
                    id: 2,
                    url: 'hats'
                },
                {
                    title: 'SNEAKERS',
                    imgURL: 'https://th.bing.com/th/id/OIP.xpWsCyCDhugEiqB5bfkIRgHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
                    id: 3,
                    url: 'hats'
                },
                {
                    title: 'WOMEN',
                    imgURL: 'https://th.bing.com/th/id/OIP.NkVMLtSrLi66jb9VZiW-MAHaE8?w=206&h=137&c=7&o=5&dpr=1.25&pid=1.7',
                    size: 'large', 
                    id: 4,
                    url: 'hats'
                },
                {
                    title: 'MEN',
                    imgURL: 'https://th.bing.com/th/id/OIP.pth0aW9imqk1XGGvB7bctQHaLF?pid=ImgDet&rs=1',
                    size: 'large',
                    id: 5,
                    url: 'hats'
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} />)
                }
            </div>
        )
    }
}

export default Directory;
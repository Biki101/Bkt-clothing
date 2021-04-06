import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        };
    }
    render() {
        const collections = this.state.collection; 
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherprops }) => (
                        <CollectionPreview key={id} {...otherprops} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
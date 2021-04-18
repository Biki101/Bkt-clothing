import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionforPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';


const Collection = ({Items}) => {
    console.log(Items);
    return (
        <div className="collection-overview">{
            Items.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
        }</div>
    );
}

const mapStateToProps = createStructuredSelector({
    Items: selectCollectionforPreview
});

export default connect(mapStateToProps)(Collection);
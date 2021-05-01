import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection-page.container';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.action';

const ShopPage = ({ fetchCollectionStart, match }) => {

        useEffect(() => {
                fetchCollectionStart();
        },[fetchCollectionStart]);
        return (
                <div className='shop-page'>
                        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                </div>
        );
}

const mapDispatchtoProps = dispatch => ({
        fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchtoProps)(ShopPage);
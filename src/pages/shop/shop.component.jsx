import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection.component';


const ShopPage = ({ match }) => // match, history and location are passed from app.js through route
(<div className='shop-page'>
        <Route exact path={`${match.path}`} component={Collection} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
</div>
);

export default ShopPage;
import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utilities';
import {connect} from 'react-redux';
import {addShopItems} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(Collection);
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {

        state = {          // constructor and super are called by default
                loading: true
        }

        unsubscribeFromSnapshot = null;

        componentDidMount() {
                const {updateCollections} = this.props;
                const collectionRef = firestore.collection('collection');
                collectionRef.onSnapshot(async snapshot => {
                      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
                      updateCollections(collectionsMap);
                      this.setState({loading: false});
                });
        }

        render() {
                const { match } = this.props;
                const {loading} = this.state;
                return (
                        <div className='shop-page'>
                                <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
                        </div>
                );
        }
}

const mapDispatchtoProps = dispatch => ({
        updateCollections: collectionsMap => dispatch(addShopItems(collectionsMap))
})

export default connect(null, mapDispatchtoProps)(ShopPage);
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectCollectionIsLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (CollectionPage);

export default CollectionPageContainer;
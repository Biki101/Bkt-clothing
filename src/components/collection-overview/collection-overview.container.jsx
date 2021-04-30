import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Collection from './collection-overview';
import { selectCollectionIsFetching } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (Collection); //connect(mapStateToProps)(WithSpinner(Collection))

export default CollectionOverviewContainer;
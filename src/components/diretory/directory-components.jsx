import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-items/menu-items';
import './directory-component.style.scss';

const Directory = ({section}) => (
    <div className="directory-menu">
        {
            section.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    section: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
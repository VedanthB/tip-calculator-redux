import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MenuItem } from '../components/MenuItem';
import { removeItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);

  return bindActionCreators(
    {
      remove: (uuid) => removeItem(ownProps.uuid)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);

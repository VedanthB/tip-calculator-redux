import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MenuItem } from '../components/MenuItem';
import { removeItem, updatePrice } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updatePrice(ownProps.uuid, price)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);

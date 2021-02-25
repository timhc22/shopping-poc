import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setItemStateFilter } from '../actions';
import { ITEM_STATE_FILTERS } from '../constants';

const ItemStateFilters = ({ activeItemStateFilter, setItemStateFilter }: any) => {
  return (
    <div className="item-state-filters">
      {Object.keys(ITEM_STATE_FILTERS).map((itemStateFilterKey) => {
        const currentItemStateFilter = ITEM_STATE_FILTERS[itemStateFilterKey];
        return (
          <span
            key={`item-state-filter-${currentItemStateFilter}`}
            className={cx(
              'item-state-filter',
              currentItemStateFilter === activeItemStateFilter && 'item-state-filter-active'
            )}
            onClick={() => {
              setItemStateFilter(currentItemStateFilter);
            }}
          >
            {currentItemStateFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { activeItemStateFilter: state.itemStateFilter };
};

export default connect(
  mapStateToProps,
  { setItemStateFilter }
)(ItemStateFilters);

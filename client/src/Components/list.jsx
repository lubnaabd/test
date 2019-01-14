import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getList } from '../Action/listAction';

export class list extends Component {
  state = {};

  componentWillMount() {
    const { getList: GetList } = this.props;
    GetList();
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items
          && items.map(({ _id, title, discripation }) => (
            <div key={_id}>
              <h3>{title}</h3>
              <p>{discripation}</p>
            </div>
          ))}
      </div>
    );
  }
}
list.propTypes = {
  getList: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};
const mapStateToProps = state => ({
  items: state.items.items,
});

export default connect(
  mapStateToProps,
  { getList },
)(list);

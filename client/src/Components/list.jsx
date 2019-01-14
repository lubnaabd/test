import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getList } from '../Action/listAction';

class list extends Component {
  state = {};

  componentWillMount() {
    const { getList: GetList } = this.props;
    GetList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      const { items } = this.props;
      items.unshift(nextProps.newPost);
    }
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
  newPost: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  items: state.items.items,
  newPost: state.items.item,
});

export default connect(
  mapStateToProps,
  { getList },
)(list);

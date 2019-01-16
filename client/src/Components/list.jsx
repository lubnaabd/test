import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getList, deleteItem } from '../Action/listAction';
import { Button, List, Item } from './StyledComponents';

class list extends Component {
  state = {};

  componentWillMount() {
    const { getList: GetList } = this.props;
    GetList();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     const { items } = this.props;
  //     items.unshift(nextProps.newPost);
  //   }
  // }

  onDelete = (id) => {
    const { deleteItem: DeleteItem } = this.props;
    const data = { id };
    DeleteItem(data);
  };

  render() {
    const { items } = this.props;
    return (
      <List>
        {items
          && items.map(({ _id, title, discripation }) => (
            <Item key={_id}>
              <hr />
              <h3>
                {title}
              </h3>
              <p>
                {discripation}
              </p>
              <Button
                type="submit"
                as="button"
                onClick={() => this.onDelete(_id)}
                delete
              >
                Delete
              </Button>
            </Item>
          ))}
      </List>
    );
  }
}
list.propTypes = {
  getList: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  // newPost: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  items: state.items.items,
  newPost: state.items.item,
});

export default connect(
  mapStateToProps,
  { getList, deleteItem },
)(list);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewItem } from '../Action/listAction';
import { Input, TextArea, Button } from './StyledComponents';

class addItem extends Component {
  state = {
    title: '',
    discripation: '',
  };

onChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};

onClick = () => {
  const { title, discripation } = this.state;
  const data = { title, discripation };
  const { addNewItem: AddNewItem } = this.props;
  AddNewItem(data);
};

render() {
  return (
    <div>
      <div>
        <h4>Title:</h4>
        <br />
        <Input type="text" name="title" onChange={this.onChange} />
      </div>
      <div>
        <h4>discripation:</h4>
        <br />
        <TextArea type="text" name="discripation" onChange={this.onChange} />
        <br />
        <Button type="submit" as="button" onClick={this.onClick}>ADD</Button>
      </div>
    </div>
  );
}
}

addItem.propTypes = {
  addNewItem: PropTypes.func.isRequired,
};
export default connect(null, { addNewItem })(addItem);

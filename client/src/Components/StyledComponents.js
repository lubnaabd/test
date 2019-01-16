import styled from 'styled-components';

export const Input = styled.input`
  border: solid 1px #60c1da;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.85em 0;
  font-size: 18px;
  font-weight: 100;
  padding: 6px 24px;
  background-color: #fff;
  outline: none;
`;

export const TextArea = styled(Input)`
  padding: 24px 24px;
`;

export const Button = styled(Input)`
  border: solid 1px #${props => (props.delete ? 'e90c27' : '60c1da')};
  background-color: #${props => (props.delete ? 'e90c27' : '60c1da')};
  color: #fff;
`;

export const List = styled.div`
  border: 1px solid #fff;
`;

export const Item = styled.div`
  text-align: justify;
  width: 70%;
  margin: 2px auto;
`;

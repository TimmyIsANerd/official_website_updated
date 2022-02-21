import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : '16px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  border: none;
  color: ${(props) => (props.color ? props.color : 'var(--primary-bg)')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '5px'};
  letter-spacing: 1px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  background: ${(props) => (props.bgColor ? props.bgColor : '#ddd')};
`;

const Input = ({ ...children }) => {
  return (
    <>
      <StyledInput {...children} />
    </>
  );
};

export default Input;

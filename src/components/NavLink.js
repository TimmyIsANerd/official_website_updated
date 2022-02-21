import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : 'rgba(18, 30, 73, 0.75)')};
  display: flex;
  font-weight: 500;
  span {
    margin: 0 8px;
    display: flex;
    align-items: center;
  }
`;
const NavLink = ({ url, label, icon, ...children }) => {
  return (
    <>
      <StyledLink to={url} {...children}>
        {label && <span>{label}</span>}
        {icon && <span>{icon}</span>}
      </StyledLink>
    </>
  );
};

export default NavLink;

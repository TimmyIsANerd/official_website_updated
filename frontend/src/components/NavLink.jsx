import { Link } from 'react-scroll';
import styled from 'styled-components';
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.footer.color};
  display: flex;
  font-weight: 500;
  cursor: pointer;
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

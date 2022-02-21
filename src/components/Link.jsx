import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledLink = styled(Link);
const LinkRoute = ({ url, label }) => {
  return (
    <>
      <StyledLink to={url} label={label} />
    </>
  );
};

export default LinkRoute;

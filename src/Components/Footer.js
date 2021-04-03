import React from "react";
import styled from 'styled-components';

const StyledFooter=styled.div`
    width: 100%;
    bottom: 0px;
    text-align: center;
`;

export const Footer = props => {
  return (<StyledFooter>Developed by: Bhagwan Reddy</StyledFooter>);
};

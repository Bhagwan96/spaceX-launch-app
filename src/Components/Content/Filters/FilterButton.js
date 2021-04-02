import React from "react";
import styled from "styled-components";
const StyledFilterButton = styled.button`
  padding: 5px 10px;
  margin: 5px 25px;
`;

export const FilterButton = props => {
  return <StyledFilterButton>{props.title}</StyledFilterButton>;
};

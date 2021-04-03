import React from "react";
import styled from "styled-components";
const StyledFilterButton = styled.button`
  padding: 5px 10px;
  margin: 5px 20px;
  background-color: ${({selected}) => selected? '#4CAF50': ''};
`;

export const FilterButton = props => {
  return <StyledFilterButton
    selected={props.selected}
    onClick={props.onSelect}
    id={props.title}
  >{props.title}</StyledFilterButton>;
};

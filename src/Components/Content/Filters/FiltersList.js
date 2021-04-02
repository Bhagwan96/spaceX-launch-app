import React from "react";
import { FilterButton } from "./FilterButton";
import styled from "styled-components";

const StyledFilterList = styled.div`
  margin-bottom: 10px;
`;

export const FiltersList = props => {
  return (
    <StyledFilterList>
      <div>{props.title || ""}</div>
      <hr />
      <div>
        {props.list.map(li => (
          <FilterButton title={`${li}`} />
        ))}
      </div>
    </StyledFilterList>
  );
};

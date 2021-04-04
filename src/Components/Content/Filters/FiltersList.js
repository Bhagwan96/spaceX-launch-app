import React from "react";
import { FilterButton } from "./FilterButton";
import styled from "styled-components";

const StyledFilterList = styled.div`
  margin-bottom: 10px;
`;

const StyledFilterName=styled.div`
  text-align: center;
`;

export const FiltersList = props => {
  return (
    <StyledFilterList>
      <StyledFilterName>{props.title || ""}</StyledFilterName>
      <hr />
      <div>
        {props.list.map(li => (
          <FilterButton
            title={`${li}`}
            onSelect={()=>props.onSelect(li)}
            selected={props.selectedFilter === li}
            key={`${li}`}
          />
        ))}
      </div>
    </StyledFilterList>
  );
};

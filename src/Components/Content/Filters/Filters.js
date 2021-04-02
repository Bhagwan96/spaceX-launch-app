import React from "react";
import { FiltersList } from "./FiltersList";
import styled from "styled-components";
const StyledFilters = styled.span`
  max-width: 300px;
  display: inline-block;
`;

export const Filters = props => {
  const {
    filters: { years, launches, landings }
  } = props;
  return (
    <StyledFilters>
      <FiltersList title={"Launch year"} list={years || []} />
      <FiltersList title={"Successful Launch"} list={launches || []} />
      <FiltersList title={"Successful Landing"} list={landings || []} />
    </StyledFilters>
  );
};

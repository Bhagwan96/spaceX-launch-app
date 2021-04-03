import React from "react";
import { FiltersList } from "./FiltersList";
import styled from "styled-components";
const StyledFilters = styled.div`
  max-width: 250px;
  min-width: 100px;
  overflow: auto;
  float: left;
`;

export const Filters = props => {
  const {
    allFilters: { years, launches, landings },
    appliedFilters: { landSuccess, launchSuccess, launchYear}
  } = props;
  return (
    <StyledFilters>
      <FiltersList
        title={"Launch year"}
        list={years || []}
        selectedFilter={launchYear}
        onSelect={(e)=>props.onSelect(e, 'launchYear')}
      />
      <FiltersList
        title={"Successful Launch"}
        list={launches || []}
        selectedFilter={launchSuccess}
        onSelect={(e)=>props.onSelect(e, 'launchSuccess')}
      />
      <FiltersList
        title={"Successful Landing"}
        list={landings || []}
        selectedFilter={landSuccess}
        onSelect={(e)=>props.onSelect(e, 'landSuccess')}
      />
    </StyledFilters>
  );
};

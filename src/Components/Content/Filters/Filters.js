import React from "react";
import { FiltersList } from "./FiltersList";
import styled from "styled-components";
const StyledFilters = styled.div`
  max-width: 200px;
  min-width: 100px;
  overflow: auto;
  float: left;
  margin-left: 40px;
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
        onSelect={(_selectedFilter)=>props.onSelect(_selectedFilter, 'launchYear')}
      />
      <FiltersList
        title={"Successful Launch"}
        list={launches || []}
        selectedFilter={launchSuccess}
        onSelect={(_selectedFilter)=>props.onSelect(_selectedFilter, 'launchSuccess')}
      />
      <FiltersList
        title={"Successful Landing"}
        list={landings || []}
        selectedFilter={landSuccess}
        onSelect={(_selectedFilter)=>props.onSelect(_selectedFilter, 'landSuccess')}
      />
    </StyledFilters>
  );
};

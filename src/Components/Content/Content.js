import React from 'react';
import { Filters } from './Filters/Filters';
import { MissionsList } from './MissionsList';
import {getMissions} from './MissionsList.service';

export class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      allFilters: {
        years: Array(15).fill().map((e, i) => i + 2006),
        launches: [true, false],
        landings: [true, false]
      },
      appliedFilters:{
        launchSuccess: null,
        landSuccess: null,
        launchYear: null,
      },
      data: [],
    };
  }

  getData=async ()=>{
    let data=await getMissions(this.state.appliedFilters);
    this.setState({data});
  }

  async componentDidMount() {
    this.getData()
  }

  onSelect=(e, filterName)=>{
    debugger;
    const appliedFilters={...this.state.appliedFilters};
    appliedFilters[filterName]=e.target.id;
    this.setState({
      appliedFilters
    }, ()=>{
      this.getData();
    });
  }

  render() {
    return (
      <>
        <Filters
          allFilters={this.state.allFilters}
          appliedFilters={this.state.appliedFilters}
          onSelect={this.onSelect}
        />
        <MissionsList data={this.state.data}/>
      </>
    );
  }
}

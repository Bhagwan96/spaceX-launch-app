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
      loading: false
    };
  }

  getData=async ()=>{
    this.setState({loading: true});
    let data=await getMissions(this.state.appliedFilters);
    this.setState({data, loading: false});
  }

  async componentDidMount() {
    this.getData()
  }

  onSelect=(_selectedFilter, filterName)=>{
    const appliedFilters={...this.state.appliedFilters};
    appliedFilters[filterName]=_selectedFilter;
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
        { this.state.loading ? <h1>Loading...</h1> :
          <MissionsList data={this.state.data}/>
        }
      </>
    );
  }
}

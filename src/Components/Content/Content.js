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

  async componentDidMount() {
    let data=await getMissions(this.state.appliedFilters);
    this.setState({data});
  }

  render() {
    return (
      <>
        <Filters filters={this.state.allFilters} />
        <MissionsList data={this.state.data}/>
      </>
    );
  }
}

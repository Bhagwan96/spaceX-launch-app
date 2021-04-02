import React from "react";
import {MissionCard} from './MissionCard';

export const MissionsList = props => {
  return (
    <span>
      {props.data.map(item => <MissionCard {...item}/>)}
    </span>
  );
}

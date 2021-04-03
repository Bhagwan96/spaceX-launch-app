import React from "react";
import {MissionCard} from './MissionCard';

export const MissionsList = props => {
  return (
    <div>
      {props.data.map(item => <MissionCard {...item} key={item.flight_number}/>)}
    </div>
  );
}

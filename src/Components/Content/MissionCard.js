import React from "react";
import styled from 'styled-components';

const StyledMissionCard=styled.span`
  padding: 10px;
  background-color: white;
  display: inline-block;
  margin: 30px;
  height: 300px;
  overflow: auto;
`

export const MissionCard=props=>{
  debugger;
  return (
    <StyledMissionCard>
      <img src='https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/artemisi_mobile_launcher.jpg?itok=rBwZ5PqG' height='150' width='150'/>
      <div>{props.mission_name+' #'+props.flight_number}</div>
      <div>Mission ids: </div>
      <ul>{props.mission_id.map(i => <li>{i}</li>)}</ul>
      <div>Launch Year: {props.launch_year}</div>
      <div>Successful Launch: {String(props.launch_success)}</div>
    </StyledMissionCard>
  );
}
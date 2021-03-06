import React from "react";
import styled from 'styled-components';

const StyledMissionCard=styled.span`
  padding: 10px;
  background-color: white;
  display: inline-block;
  margin: 10px;
  height: 300px;
  overflow: hidden;
  width: 200px;
`
const BoldText=styled.div`
  font-weight: bold;
`;

export const MissionCard=props=>{
  return (
    <StyledMissionCard>
      <img src='https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/artemisi_mobile_launcher.jpg?itok=rBwZ5PqG' alt='Rocket image' height='150' width='100%'/>
      <div>{props.mission_name+' #'+props.flight_number}</div>
      <BoldText>Mission ids: </BoldText>
      <ul>{props.mission_id.map(i => <li key={i}>{i}</li>)}</ul>
      <BoldText>Launch Year: {props.launch_year}</BoldText>
      <BoldText>Successful Launch: {String(props.launch_success)}</BoldText>
    </StyledMissionCard>
  );
}
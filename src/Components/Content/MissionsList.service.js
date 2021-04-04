export const getMissions=async (filters = {})=>{
  let baseUrl='https://api.spacexdata.com/v3/launches?limit=100';
  const {launchSuccess, landSuccess, launchYear}=filters;
  if(launchSuccess !== null){
    baseUrl=`${baseUrl}&launch_success=${launchSuccess}`
  }
  if(landSuccess !== null){
    baseUrl=`${baseUrl}&land_success=${landSuccess}`
  }
  if(launchYear !== null){
    baseUrl=`${baseUrl}&launch_year=${launchYear}`
  }
  const resp=await fetch(baseUrl);
  return resp.json();
}
let baseUrl='https://api.spacexdata.com/v3/launches?limit=100';

export const getMissions=async (filters = {})=>{
  const {launchSuccess, landSuccess, launchYear}=filters;
  if(launchSuccess){
    baseUrl=`${baseUrl}&launch_success=true`
  }
  if(landSuccess){
    baseUrl=`${baseUrl}&landSuccess_success=true`
  }
  if(launchYear){
    baseUrl=`${baseUrl}&launch_year=${launchYear}`
  }
  const resp=await fetch(baseUrl);
  return resp.json();
}
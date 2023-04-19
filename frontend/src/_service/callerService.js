import { getUserMockData, getActivityMockData, getAverageSessionsMockData, getRadarDashboardMockData, getKPIMockData, getCardMockData } from "./mock/userMockData"
import { getUserAPIData, getActivityAPIData, getAverageSessionsAPIData, getRadarDashboardAPIData, getKPIAPIData, getCardAPIData } from "./API/userApiData"

// let test = () => {return 'Marcel'}

// export default test

/**
 * Si mock donc fichier json
 * Si API url API
 */

let mock =  localStorage.getItem('mock')
//console.log(mock)

//const mock = true
//const mock = false

 const getAllData = async (id) => {
// const getAllData = async (id,mock) => {

  if(mock==="true"){
    let user =  await getUserMockData(id)
    let activity = await getActivityMockData(id)
    let averageSessions = await getAverageSessionsMockData(id)
    let radarDashboard = await getRadarDashboardMockData(id)
    let userKPI = await getKPIMockData(id)
    let userCard = await getCardMockData(id)

    return {user, activity, averageSessions, radarDashboard, userKPI, userCard}

  } else if (mock==="false") {
    //return await getUserAPIData(id)
    let user =  await getUserAPIData(id)
    let activity = await getActivityAPIData(id)
    let averageSessions = await getAverageSessionsAPIData(id)
    let radarDashboard = await getRadarDashboardAPIData(id)
    let userKPI = await getKPIAPIData(id)
    let userCard = await getCardAPIData(id)

    return {user, activity, averageSessions, radarDashboard, userKPI, userCard}
  }
}

export default getAllData
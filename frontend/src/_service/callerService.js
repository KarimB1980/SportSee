import { getUserMockData, getActivityMockData, getAverageSessionsMockData, getRadarDashboardMockData, getKPIMockData, getCardMockData } from "./mock/userMockData"
import { getUserAPIData, getActivityAPIData, getAverageSessionsAPIData, getRadarDashboardAPIData, getKPIAPIData, getCardAPIData } from "./API/userApiData"

/**
 * Si mock donc fichier json
 * Si API url API
 */

let mock =  localStorage.getItem('mock')

const getAllData = async (id) => {

  if(mock==="true"){
    let user =  await getUserMockData(id)
    let activity = await getActivityMockData(id)
    let averageSessions = await getAverageSessionsMockData(id)
    let radarDashboard = await getRadarDashboardMockData(id)
    let userKPI = await getKPIMockData(id)
    let userCard = await getCardMockData(id)

    return {user, activity, averageSessions, radarDashboard, userKPI, userCard}

  } else {
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
import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000/'
})

/**
 * Function to User data from user
 * @param {string} id 
 * @returns array
 */
let getUserAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}`)

  let tableau = []

  tableau["id"] = brut.data.data.id ;
  tableau["firstName"] = brut.data.data.userInfos.firstName;
  tableau["lastName"] = brut.data.data.userInfos.lastName;
  tableau["age"] = brut.data.data.userInfos.age;
  tableau["todayScore"] = brut.data.data.todayScore;
  tableau["calorieCount"] = brut.data.data.keyData.calorieCount;
  tableau["proteinCount"] = brut.data.data.keyData.proteinCount;
  tableau["carbohydrateCount"] = brut.data.data.keyData.carbohydrateCount;
  tableau["lipidCount"] = brut.data.data.keyData.lipidCount;

  return tableau
}

/**
 * Function to Activity data from user
 * @param {string} id 
 * @returns array
 */
let getActivityAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}/activity`)

  let tableau1 = [];
  let tableau2 = [];
  let tableau3 = [];
  let tableau4 = [];
  let tableau5 = [];
  let tableau6 = [];
  let tableau7 = [];

  tableau1["day"] = brut.data.data.sessions[0].day
  tableau1["kilogram"] = brut.data.data.sessions[0].kilogram
  tableau1["calorie"] = brut.data.data.sessions[0].calories

  tableau2["day"] = brut.data.data.sessions[1].day
  tableau2["kilogram"] = brut.data.data.sessions[1].kilogram
  tableau2["calorie"] = brut.data.data.sessions[1].calories

  tableau3["day"] = brut.data.data.sessions[2].day
  tableau3["kilogram"] = brut.data.data.sessions[2].kilogram
  tableau3["calorie"] = brut.data.data.sessions[2].calories

  tableau4["day"] = brut.data.data.sessions[3].day
  tableau4["kilogram"] = brut.data.data.sessions[3].kilogram
  tableau4["calorie"] = brut.data.data.sessions[3].calories

  tableau5["day"] = brut.data.data.sessions[4].day
  tableau5["kilogram"] = brut.data.data.sessions[4].kilogram
  tableau5["calorie"] = brut.data.data.sessions[4].calories

  tableau6["day"] = brut.data.data.sessions[5].day
  tableau6["kilogram"] = brut.data.data.sessions[5].kilogram
  tableau6["calorie"] = brut.data.data.sessions[5].calories

  tableau7["day"] = brut.data.data.sessions[6].day
  tableau7["kilogram"] = brut.data.data.sessions[6].kilogram
  tableau7["calorie"] = brut.data.data.sessions[6].calories

  return [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7];
}

/**
 * Function to AverageSessions data from user
 * @param {string} id 
 * @returns array
 */
let getAverageSessionsAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}/average-sessions`)

  let objetMock1 =  {day:'L', sessionLength:brut.data.data.sessions[0].sessionLength};
  let objetMock2 =  {day:'M', sessionLength:brut.data.data.sessions[1].sessionLength};
  let objetMock3 =  {day:'M', sessionLength:brut.data.data.sessions[2].sessionLength};
  let objetMock4 =  {day:'J', sessionLength:brut.data.data.sessions[3].sessionLength};
  let objetMock5 =  {day:'V', sessionLength:brut.data.data.sessions[4].sessionLength};
  let objetMock6 =  {day:'S', sessionLength:brut.data.data.sessions[5].sessionLength};
  let objetMock7 =  {day:'D', sessionLength:brut.data.data.sessions[6].sessionLength};

  return [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7];
}

/**
 * Function to Radar data from user
 * @param {string} id 
 * @returns array
 */
let getRadarDashboardAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}/performance`)

  let objet1 = {kind:'Intensité', value:brut.data.data.data[5].value};
  let objet2 = {kind:'Vitesse', value:brut.data.data.data[4].value};
  let objet3 = {kind:'Force', value:brut.data.data.data[3].value};
  let objet4 = {kind:'Endurance', value:brut.data.data.data[2].value};
  let objet5 = {kind:'Energie', value:brut.data.data.data[1].value};
  let objet6 = {kind:'Cardio', value:brut.data.data.data[0].value};

  return [objet1,objet2,objet3,objet4,objet5,objet6];
}

/**
 * Function to KPI data from user
 * @param {string} id 
 * @returns array
 */
let getKPIAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}`)

  let tableau = {todayScore:brut.data.data.todayScore};

  return [tableau];
}

/**
 * Function to Card data from user
 * @param {string} id 
 * @returns array
 */
let getCardAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}`)

  let tableau = {keyData:brut.data.data.keyData};

  return [tableau];
}

export { getUserAPIData, getActivityAPIData, getAverageSessionsAPIData, getRadarDashboardAPIData, getKPIAPIData, getCardAPIData }
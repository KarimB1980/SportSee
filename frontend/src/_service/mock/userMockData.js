import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from  './dataMock'

/**
 * Function to User data from user
 * @param {string} id 
 * @returns {array} [id:number, firstName:string, lastName:string, age:number, todayScore:number, calorieCount:number, proteinCount:number, carbohydrateCount:number, lipidCount:number]
 */
let getUserMockData = async (id) => {

  let brut = USER_MAIN_DATA.filter(user => user.id === id)[0]

  let tableau = []

  tableau["id"] = brut.id ;
  tableau["firstName"] = brut.userInfos.firstName;
  tableau["lastName"] = brut.userInfos.lastName;
  tableau["age"] = brut.userInfos.age;
  tableau["todayScore"] = brut.todayScore;
  tableau["calorieCount"] = brut.keyData.calorieCount;
  tableau["proteinCount"] = brut.keyData.proteinCount;
  tableau["carbohydrateCount"] = brut.keyData.carbohydrateCount;
  tableau["lipidCount"] = brut.keyData.lipidCount;

  return tableau
}

/**
 * Function to Activity data from user
 * @param {string} id 
 * @returns {array} [[day:string, kilogram:number, calorie:number],[day:string, kilogram:number, calorie:number],[day:string, kilogram:number, calorie:number],[day:string, kilogram:number, calorie:number],[day:string, kilogram:number, calorie:number],[day:string, kilogram:number, calorie:number]]
 */
let getActivityMockData = async (id) => {
  let brut = USER_ACTIVITY.filter(activity => activity.userId === id)[0]

  let tableau1 = [];
  let tableau2 = [];
  let tableau3 = [];
  let tableau4 = [];
  let tableau5 = [];
  let tableau6 = [];
  let tableau7 = [];

  tableau1["day"] = brut.sessions[0].day
  tableau1["kilogram"] = brut.sessions[0].kilogram
  tableau1["calorie"] = brut.sessions[0].calories

  tableau2["day"] = brut.sessions[1].day
  tableau2["kilogram"] = brut.sessions[1].kilogram
  tableau2["calorie"] = brut.sessions[1].calories

  tableau3["day"] = brut.sessions[2].day
  tableau3["kilogram"] = brut.sessions[2].kilogram
  tableau3["calorie"] = brut.sessions[2].calories

  tableau4["day"] = brut.sessions[3].day
  tableau4["kilogram"] = brut.sessions[3].kilogram
  tableau4["calorie"] = brut.sessions[3].calories

  tableau5["day"] = brut.sessions[4].day
  tableau5["kilogram"] = brut.sessions[4].kilogram
  tableau5["calorie"] = brut.sessions[4].calories

  tableau6["day"] = brut.sessions[5].day
  tableau6["kilogram"] = brut.sessions[5].kilogram
  tableau6["calorie"] = brut.sessions[5].calories

  tableau7["day"] = brut.sessions[6].day
  tableau7["kilogram"] = brut.sessions[6].kilogram
  tableau7["calorie"] = brut.sessions[6].calories

  return [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7];
}

/**
 * Function to AverageSessions data from user
 * @param {string} id 
 * @returns {array} [{day:'L',sessionLength:number},{day:'M',sessionLength:number},{day:'M',sessionLength:number},{day:'J',sessionLength:number},{day:'V',sessionLength:number},{day:'S',sessionLength:number},{day:'D',sessionLength:number}]
 */
let getAverageSessionsMockData = async (id) => {
  let brut = USER_AVERAGE_SESSIONS.filter(average => average.userId === id)[0]

  let objetMock1 =  {day:'L', sessionLength:brut.sessions[0].sessionLength};
  let objetMock2 =  {day:'M', sessionLength:brut.sessions[1].sessionLength};
  let objetMock3 =  {day:'M', sessionLength:brut.sessions[2].sessionLength};
  let objetMock4 =  {day:'J', sessionLength:brut.sessions[3].sessionLength};
  let objetMock5 =  {day:'V', sessionLength:brut.sessions[4].sessionLength};
  let objetMock6 =  {day:'S', sessionLength:brut.sessions[5].sessionLength};
  let objetMock7 =  {day:'D', sessionLength:brut.sessions[6].sessionLength};

  return [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7];
}

/**
 * Function to Radar data from user
 * @param {string} id 
 * @returns {array} [{kind:'Intensité',value:number},{kind:'Vitesse',value:number},{kind:'Force',value:number},{kind:'Endurance',value:number},{kind:'Energie',value:number},{kind:'Cardio',value:number}]
 */
let getRadarDashboardMockData = async (id) => {
  let brut = USER_PERFORMANCE.filter(performance => performance.userId === id)[0]

  let objet1 = {kind:'Intensité', value:brut.data[5].value};
  let objet2 = {kind:'Vitesse', value:brut.data[4].value};
  let objet3 = {kind:'Force', value:brut.data[3].value};
  let objet4 = {kind:'Endurance', value:brut.data[2].value};
  let objet5 = {kind:'Energie', value:brut.data[1].value};
  let objet6 = {kind:'Cardio', value:brut.data[0].value};

  return [objet1,objet2,objet3,objet4,objet5,objet6];
}

/**
 * Function to KPI data from user
 * @param {string} id 
 * @returns {array} [todayScore:number]
 */
let getKPIMockData = async (id) => {
  let brut = USER_MAIN_DATA.filter(user => user.id === id)[0]

  let tableau = {todayScore:brut.todayScore};

  return [tableau];
}

/**
 * Function to Card data from user
 * @param {string} id 
 * @returns {array} [keyData:{calorieCount:number,proteinCount:number,carbohydrateCount:number,lipidCount:number}]
 */
let getCardMockData = async (id) => {
  let brut = USER_MAIN_DATA.filter(user => user.id === id)[0]

  let tableau = {keyData:brut.keyData};

  return [tableau];
}

export { getUserMockData, getActivityMockData, getAverageSessionsMockData, getRadarDashboardMockData, getKPIMockData, getCardMockData }
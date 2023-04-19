import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from  '../dataMock'

let getUserMockData = async (id) => {

  let brut = await USER_MAIN_DATA.filter(user => user.id === id)[0]

  //console.log(brut)

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

let getActivityMockData = async (id) => {
  let brut = await USER_ACTIVITY.filter(activity => activity.userId === id)[0]
  //console.log(brut)

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

let getAverageSessionsMockData = async (id) => {
  let brut = await USER_AVERAGE_SESSIONS.filter(average => average.userId === id)[0]
  //console.log(brut)

  // Variable données mockées
  let objetMock1 =  {day:'L', sessionLength:brut.sessions[0].sessionLength};
  let objetMock2 =  {day:'M', sessionLength:brut.sessions[1].sessionLength};
  let objetMock3 =  {day:'M', sessionLength:brut.sessions[2].sessionLength};
  let objetMock4 =  {day:'J', sessionLength:brut.sessions[3].sessionLength};
  let objetMock5 =  {day:'V', sessionLength:brut.sessions[4].sessionLength};
  let objetMock6 =  {day:'S', sessionLength:brut.sessions[5].sessionLength};
  let objetMock7 =  {day:'D', sessionLength:brut.sessions[6].sessionLength};

  return [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7];
}

let getRadarDashboardMockData = async (id) => {
  let brut = await USER_PERFORMANCE.filter(performance => performance.userId === id)[0]
  //console.log(brut)

  // Variable données mockées
  let objet1 = {kind:'Intensité', value:brut.data[5].value};
  let objet2 = {kind:'Vitesse', value:brut.data[4].value};
  let objet3 = {kind:'Force', value:brut.data[3].value};
  let objet4 = {kind:'Endurance', value:brut.data[2].value};
  let objet5 = {kind:'Energie', value:brut.data[1].value};
  let objet6 = {kind:'Cardio', value:brut.data[0].value};

  //console.log([objet1,objet2,objet3,objet4,objet5,objet6])
  return [objet1,objet2,objet3,objet4,objet5,objet6];
}

let getKPIMockData = async (id) => {
  let brut = await USER_MAIN_DATA.filter(user => user.id === id)[0]
  //console.log(brut)

  let tableau = {todayScore:brut.todayScore};

  //console.log([tableau])
  return [tableau];
}

let getCardMockData = async (id) => {
  let brut = await USER_MAIN_DATA.filter(user => user.id === id)[0]
  //console.log(brut)

  let tableau = {keyData:brut.keyData};

  //console.log([tableau])
  return [tableau];
}

export { getUserMockData, getActivityMockData, getAverageSessionsMockData, getRadarDashboardMockData, getKPIMockData, getCardMockData }
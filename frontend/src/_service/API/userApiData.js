import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000/'
})

let getUserAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}`)
  //console.log(brut.data.data)

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

  //console.log(tableau)
  return tableau
}

let getActivityAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}/activity`)
  //console.log(brut.data.data)

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

  //console.log([tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7])
  return [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7];
}

let getAverageSessionsAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}/average-sessions`)
  //console.log(brut.data.data)

  // Variable données mockées
  let objetMock1 =  {day:'L', sessionLength:brut.data.data.sessions[0].sessionLength};
  let objetMock2 =  {day:'M', sessionLength:brut.data.data.sessions[1].sessionLength};
  let objetMock3 =  {day:'M', sessionLength:brut.data.data.sessions[2].sessionLength};
  let objetMock4 =  {day:'J', sessionLength:brut.data.data.sessions[3].sessionLength};
  let objetMock5 =  {day:'V', sessionLength:brut.data.data.sessions[4].sessionLength};
  let objetMock6 =  {day:'S', sessionLength:brut.data.data.sessions[5].sessionLength};
  let objetMock7 =  {day:'D', sessionLength:brut.data.data.sessions[6].sessionLength};

  //console.log([objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7])
  return [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7];
}

let getRadarDashboardAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}/performance`)
  //console.log(brut.data.data.data)

  // Variable données mockées
  let objet1 = {kind:'Intensité', value:brut.data.data.data[5].value};
  let objet2 = {kind:'Vitesse', value:brut.data.data.data[4].value};
  let objet3 = {kind:'Force', value:brut.data.data.data[3].value};
  let objet4 = {kind:'Endurance', value:brut.data.data.data[2].value};
  let objet5 = {kind:'Energie', value:brut.data.data.data[1].value};
  let objet6 = {kind:'Cardio', value:brut.data.data.data[0].value};

  //console.log([objet1,objet2,objet3,objet4,objet5,objet6])
  return [objet1,objet2,objet3,objet4,objet5,objet6];
}

let getKPIAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}`)
  //console.log(brut.data.data)

  let tableau = {todayScore:brut.data.data.todayScore};

  //console.log([tableau])
  return [tableau];
}

let getCardAPIData = async (id) => {
  let brut = await Axios.get(`user/${id}`)
  //console.log(brut.data.data)

  let tableau = {keyData:brut.data.data.keyData};

  //console.log([tableau])
  return [tableau];
}


export { getUserAPIData, getActivityAPIData, getAverageSessionsAPIData, getRadarDashboardAPIData, getKPIAPIData, getCardAPIData }
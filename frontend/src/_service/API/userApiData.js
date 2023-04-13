import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:3000/'
})

let getUserAPIData = async (userid) => {
    let brut = await Axios.get(`user/${userid}`)
    console.log(brut.data.data)

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

export { getUserAPIData }
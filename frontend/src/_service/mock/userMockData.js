import {USER_MAIN_DATA, USER_ACTIVITY} from  '../dataMock'


let getUserMockData = async (id) => {
    let brut = await USER_MAIN_DATA.filter(user => user.id === id)[0]

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
    let brut = await USER_ACTIVITY.filter(act => act.userId === id)[0]
    console.log(brut)

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
    tableau7["calorie"] = brut.sessions[6].calories7

    return [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7];

}

export { getUserMockData, getActivityMockData }
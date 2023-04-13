import { getUserMockData, getActivityMockData } from "./mock/userMockData"
import { getUserAPIData } from "./API/userApiData"

// let test = () => {return 'Marcel'}

// export default test

/**
 * Si mock donc fichier json
 * Si API url API
 */

const mock = true

const getAllData = async (id=12) => {
    if(mock){
        let user =  await getUserMockData(id)
        let activity = await getActivityMockData(id)

        return {user,  activity}
    }else{
        return await getUserAPIData(id)
    }
}

export default getAllData
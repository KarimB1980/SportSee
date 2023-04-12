import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom'

export default function DatasMock() {
  // Récupération de l'ID de l'utilisateur
  const { userid } = useParams()

  //let baseURL = `http://localhost:3000/user/${userid}`;
  let baseURL = `./../../_mocks/user/${userid}/dataUser.json`;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    })
  // eslint-disable-next-line
  }, []);

  if (!post) return null;

  let id = post.data.id
  let firstName = post.data.userInfos.firstName
  let lastName = post.data.userInfos.lastName
  let age = post.data.userInfos.age
  let todayScore = post.data.todayScore
  let calorieCount = post.data.keyData.calorieCount
  let proteinCount = post.data.keyData.proteinCount
  let carbohydrateCount = post.data.keyData.carbohydrateCount
  let lipidCount = post.data.keyData.lipidCount

  let tableau = []

  tableau["id"] = id ;
  tableau["firstName"] = firstName;
  tableau["lastName"] = lastName;
  tableau["age"] = age;
  tableau["todayScore"] = todayScore;
  tableau["calorieCount"] = calorieCount;
  tableau["proteinCount"] = proteinCount;
  tableau["carbohydrateCount"] = carbohydrateCount;
  tableau["lipidCount"] = lipidCount;

  return (
    tableau
  );
}
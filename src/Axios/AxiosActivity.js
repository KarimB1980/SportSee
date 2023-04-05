import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom'

export default function DatasActivity() {
  // Récupération de l'ID de l'utilisateur
  const { userid } = useParams()
  console.log(userid)

  const baseURL = `http://localhost:3000/user/${userid}/activity`;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      //console.log(response.data)
    });
  }, []);

  if (!post) return null;
  //console.log(post);

  let day1 = post.data.sessions[0].day
  let kilogram1 = post.data.sessions[0].kilogram
  let calories1 = post.data.sessions[0].calories

  let day2 = post.data.sessions[1].day
  let kilogram2 = post.data.sessions[1].kilogram
  let calories2 = post.data.sessions[1].calories

  let day3 = post.data.sessions[2].day
  let kilogram3 = post.data.sessions[2].kilogram
  let calories3 = post.data.sessions[2].calories

  let day4 = post.data.sessions[3].day
  let kilogram4 = post.data.sessions[3].kilogram
  let calories4 = post.data.sessions[3].calories

  let day5 = post.data.sessions[4].day
  let kilogram5 = post.data.sessions[4].kilogram
  let calories5 = post.data.sessions[4].calories

  let day6 = post.data.sessions[5].day
  let kilogram6 = post.data.sessions[5].kilogram
  let calories6 = post.data.sessions[5].calories

  let day7 = post.data.sessions[6].day
  let kilogram7 = post.data.sessions[6].kilogram
  let calories7 = post.data.sessions[6].calories

  let tableau1 = [];
  let tableau2 = [];
  let tableau3 = [];
  let tableau4 = [];
  let tableau5 = [];
  let tableau6 = [];
  let tableau7 = [];
  let tableau = [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7];


  tableau1["day"] = day1;
  tableau1["kilogram"] = kilogram1;
  tableau1["calorie"] = calories1;

  tableau2["day"] = day2;
  tableau2["kilogram"] = kilogram2;
  tableau2["calorie"] = calories2;

  tableau3["day"] = day3;
  tableau3["kilogram"] = kilogram3;
  tableau3["calorie"] = calories3;

  tableau4["day"] = day4;
  tableau4["kilogram"] = kilogram4;
  tableau4["calorie"] = calories4;

  tableau5["day"] = day5;
  tableau5["kilogram"] = kilogram5;
  tableau5["calorie"] = calories5;

  tableau6["day"] = day6;
  tableau6["kilogram"] = kilogram6;
  tableau6["calorie"] = calories6;

  tableau7["day"] = day7;
  tableau7["kilogram"] = kilogram7;
  tableau7["calorie"] = calories7;
  
  console.log(tableau);

  return (
    tableau
  );
}
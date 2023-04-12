import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom'

export default function DatasAverageSessions() {
  // Récupération de l'ID de l'utilisateur
  const { userid } = useParams()

  let baseURL = `http://localhost:3000/user/${userid}/average-sessions`;
  //let baseURL = `./../../_mocks/user/${userid}/average-sessions.json`;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    })
  // eslint-disable-next-line
  }, []);

  if (!post) return null;

  let day1 = post.data.sessions[0].day
  let sessionLength1 = post.data.sessions[0].sessionLength

  let day2 = post.data.sessions[1].day
  let sessionLength2 = post.data.sessions[1].sessionLength

  let day3 = post.data.sessions[2].day
  let sessionLength3 = post.data.sessions[2].sessionLength

  let day4 = post.data.sessions[3].day
  let sessionLength4 = post.data.sessions[3].sessionLength

  let day5 = post.data.sessions[4].day
  let sessionLength5 = post.data.sessions[4].sessionLength

  let day6 = post.data.sessions[5].day
  let sessionLength6 = post.data.sessions[5].sessionLength

  let day7 = post.data.sessions[6].day
  let sessionLength7 = post.data.sessions[6].sessionLength

  let tableau1 = [];
  let tableau2 = [];
  let tableau3 = [];
  let tableau4 = [];
  let tableau5 = [];
  let tableau6 = [];
  let tableau7 = [];
  let tableau = [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6, tableau7];

  tableau1["day"] = day1;
  tableau1["sessionLength"] = sessionLength1;

  tableau2["day"] = day2;
  tableau2["sessionLength"] = sessionLength2;

  tableau3["day"] = day3;
  tableau3["sessionLength"] = sessionLength3;

  tableau4["day"] = day4;
  tableau4["sessionLength"] = sessionLength4;

  tableau5["day"] = day5;
  tableau5["sessionLength"] = sessionLength5;

  tableau6["day"] = day6;
  tableau6["sessionLength"] = sessionLength6;

  tableau7["day"] = day7;
  tableau7["sessionLength"] = sessionLength7;

  return (
    tableau
  );
}
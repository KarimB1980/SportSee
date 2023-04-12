import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom'

export default function DatasPerformanceMock() {
  // Récupération de l'ID de l'utilisateur
  const { userid } = useParams()

  //let baseURL = `http://localhost:3000/user/${userid}/performance`;
  let baseURL = `./../../_mocks/user/${userid}/performance.json`;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    })
  // eslint-disable-next-line
  }, []);

  if (!post) return null;

  let value1 = post.data.data[0].value
  let kind1 = post.data.data[0].kind

  let value2 = post.data.data[1].value
  let kind2 = post.data.data[1].kind

  let value3 = post.data.data[2].value
  let kind3 = post.data.data[2].kind

  let value4 = post.data.data[3].value
  let kind4 = post.data.data[3].kind

  let value5 = post.data.data[4].value
  let kind5 = post.data.data[4].kind

  let value6 = post.data.data[5].value
  let kind6 = post.data.data[5].kind

  let tableau1 = [];
  let tableau2 = [];
  let tableau3 = [];
  let tableau4 = [];
  let tableau5 = [];
  let tableau6 = [];
  let tableau = [tableau1, tableau2, tableau3, tableau4, tableau5, tableau6];

  tableau1["value"] = value1;
  tableau1["kind"] = kind1;

  tableau2["value"] = value2;
  tableau2["kind"] = kind2;

  tableau3["value"] = value3;
  tableau3["kind"] = kind3;

  tableau4["value"] = value4;
  tableau4["kind"] = kind4;

  tableau5["value"] = value5;
  tableau5["kind"] = kind5;

  tableau6["value"] = value6;
  tableau6["kind"] = kind6;

  return (
    tableau
  );
}
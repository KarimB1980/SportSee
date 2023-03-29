//import data from './data.json'
import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "./data"

export default function Datas() {

  //let outsideVariable;

  let outsideVariable = fetch(USER_MAIN_DATA)
  .then(function(reponse) {
    if (reponse.ok) {
      return USER_MAIN_DATA;
    }
  })
  /*.then(function DatasUser(datas) {
    console.log(datas[0]);
    console.log(datas[1]);
    //console.log(datas[2]);
    //console.log(datas[3]);

    let identifiant = document.querySelector('.utilisateurs');

    return (
    identifiant.innerHTML = JSON.stringify(datas[0].id)
    )
  })*/
  .then(data => {
    outsideVariable = data;
  })
  .then(() => {
    console.log(outsideVariable);
    let identifiant = document.querySelector('.nameUser');
    let firstName = outsideVariable[0].userInfos.firstName;
    console.log(firstName)

    return (
      //identifiant.innerHTML = JSON.stringify(outsideVariable[0].id)
      identifiant.innerHTML = firstName
    )
  });

  const promise1 = Promise.resolve(outsideVariable);
  promise1.then((data => {
    outsideVariable = data;
    console.log(data);
  }));
  console.log(promise1);
}



//------------------------------------------------------------------------------------------------------------------//
/*
import axios from "axios";
import React from "react";

import datasusers from './data.json'

//const baseURL = "/Home";

export default function Datas() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    //axios.get(baseURL).then((response) => {
    axios.get(datasusers).then((response) => {
      console.log("axios.get ça marche");
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}*/


/*import React from "react";
import data from './data.json'

export default function Datas() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {

    fetch(data)
    .then(function(reponse) {
      if (reponse.ok) {
        return data;
      }
    })
    .then(function DatasUser(datas) {
      console.log(datas[0]);
      console.log(datas[1]);
      console.log(datas[2]);
      console.log(datas[3]);

    });
  }, []);

  if (!post) return null;


  let identifiant = document.querySelector('.utilisateurs');

  return (
  identifiant.innerHTML = JSON.stringify(datas[0][0].id)
    )
  //})
}*/

//import datausers from './data'
//import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./data";
/*import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "./data"

//console.log(USER_MAIN_DATA);
//console.log(USER_ACTIVITY);
//console.log(USER_AVERAGE_SESSIONS);
//console.log(USER_PERFORMANCE);

export default function Datas() {

  let test = JSON.stringify(USER_MAIN_DATA);
  console.log(test);

  let outsideVariable;

  fetch(test)
  .then(response => response.json())
  .then(data => {
    outsideVariable = data;
  })
  .then(() => {
    console.log(outsideVariable); // value of outsideVariable is now available
  });
}*/
import data from '../_mocks/data.json'

export default function Datas() {
  fetch(data)
  .then(function(reponse) {
    if (reponse.ok) {
      return data;
    }
  })
  .then(function Datas(datas) {
    console.log(datas[0]);
    console.log(datas[1]);
    console.log(datas[2]);
    console.log(datas[3]);

    let firstname = document.querySelector('.User');
    firstname.innerHTML = JSON.stringify(datas[0][0].userInfos.firstName);
    console.log(firstname);

    return datas[0];
  })
}
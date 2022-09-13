import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlAPI, data){
    const response = fetch(urlAPI, {
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    return response;
}

const datos = {
    "title": "Gorra",
    "price": 3452,
    "description": "Gorra muy cara",
    "categoryId": 1,
    "images": ["https://upload.wikimedia.org/wikipedia/commons/4/45/Red_High_Heel_Pumps.jpg"]
  };

  postData(`${API}/products`, datos)
    .then(info => info.json())
    .then(data => console.log(data))
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';  

function postData(url_api, data) {
    const response = fetch (url_api, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response 
}

const data = {
    "title": "new Product Course",
    "price": 10000,
    "description": "new Product Course",
    "categoryId": 2,
    "images": [
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    ]
}

postData (`${API}/products`, data)
.then(response =>response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log('Finally'))


import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';
function fetchData(url_api){
    return fetch(url_api)
}


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)}
        )
    .then(response => response.json())
    .then(res => {
        return fetchData(`${API}/categories/${res.category.id}`);
    })
    .then(res => res.json())
    .then(res => console.log(res.name))
    .catch(err=> console.log(`Ocurrió un error: ${err}`))
    .finally(()=> console.log('terminó'))

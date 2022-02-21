import STORAGE from "/js/utils/storage.js";
const URL = "https://technovation-api-login.herokuapp.com/"
const generateHeaders = () =>{
    return {
        "content-Type": "aplication/json",
        Authorization: STORAGE.has("token")? "Token" + STORAGE.get("token"):'',
    }
}
const CLIENT = {
    get: async (path) => {
        const response = await fetch(URL + path,{
            method: "GET",
            headers: generateHeaders()});
        if (!response.ok) throw Error(response.statusText);
        const json = await response.json ();
        return json;
},
post: async (path, data) => {
    // 1. Hacer Peticion
    const response = await fetch(URL + path, {
      method: "POST",
      headers:generateHeaders(),
      body: JSON.stringify(data),
    });
    // Validar la respuesta
    if (!response.ok) 
      return response.text().then(text => { throw new Error(text) })
   
    // Extraer la información
    const json = await response.json();
    return json;
  },
  request: async (method,path,data={}) => {

    const response = await fetch(URL + path, {
      method: method,
      headers:generateHeaders(),
      body: JSON.stringify(data),
    });
   
    if (!response.ok) 
      return response.text().then(text => { throw new Error(text) })

    if(method == 'DELETE') return;


    const json = await response.json();
    return json;
  },
};

export default CLIENT;
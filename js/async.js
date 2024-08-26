import { baseURL } from "./main.js";

// getCountires ASYNC
export async function getCountires(){
    const response = await fetch(baseURL + '/all');
    const data = await response.json();
    
    
    data.forEach((counry) => {
        drowCountries(counry)
    })
    
}

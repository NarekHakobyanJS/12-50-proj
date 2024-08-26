import { baseURL } from "./main.js";

const mainBlock = document.getElementById('main-block');
const pagination = document.getElementById('pagination');

// drowBTN
function dorwBTN(){
    let totalCount = 250
    let pageSize = 50

    let pageCount = Math.ceil(totalCount / pageSize)
    
    for(let i = 1; i <= pageCount; i++){
        const paginateBtns = document.createElement('button') ;
        paginateBtns.textContent = i
        pagination.append(paginateBtns)
    }
    
}

dorwBTN()

// getCountires ASYNC
async function getCountires(){
    const response = await fetch(baseURL + '/all');
    const data = await response.json();
    
    data.forEach((counry) => {
        drowCountries(counry)
    })
    
}

function drowCountries({name, flags}){
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    h3.textContent = name.common
    img.setAttribute('src', flags.png);
    div.classList.add('country-block')
    div.append(img, h3)
    mainBlock.append(div)

}

window.addEventListener('DOMContentLoaded', getCountires)











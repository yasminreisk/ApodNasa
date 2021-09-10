let inputDate = document.getElementById('date');
let btnShow = document.getElementById('btnShow');

let requisicao = new XMLHttpRequest();
console.log(inputDate.value);

btnShow.addEventListener("click", function () {

    requisicao.open("GET", `https://api.nasa.gov/planetary/apod?api_key=fbPxP3vn5HhCcFEmeRGjLFkbzy0tBMNoyFE9bEp2&date=${inputDate.value}`);

    requisicao.send();
})

requisicao.open("GET", `https://api.nasa.gov/planetary/apod?api_key=fbPxP3vn5HhCcFEmeRGjLFkbzy0tBMNoyFE9bEp2`);

requisicao.onload = function(){
    if (requisicao.status == 200) {
        let objApi = JSON.parse(requisicao.responseText);
        console.log(objApi);
        let imgApi= document.getElementById('image');
        let nomeApi = document.getElementById('nome');
        let videoApi = document.getElementById('video');
        let textoApi = document.getElementById('texto');

        textoApi.innerHTML = objApi.explanation;
        nomeApi.innerHTML = objApi.title;

        textoApi.classList.add('texto');
        nomeApi.classList.add('nome');

        if (imgApi.media_type = 'image') {
            imgApi.src = objApi.url;
            videoApi.classList.add('hidden');               
        } 
        
        else {
            videoApi.src = objApi.url;
            imgApi.classList.add('hidden');
        }

        videoApi.classList.add('video');
        imgApi.classList.add('image');

    } 

    else {
        window.location.href = '404.html';
        
    }
}

requisicao.send(); 
document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest(){
    const characterName = document.querySelector('input').value;
    try{
        const response = await fetch(`https://sonic-api-100devs.herokuapp.com/api/${characterName}`);
        const data = await response.json();

        console.log(data);
        document.querySelector('h2').innerText = data.powers;
    }catch(error){
        console.log(error);
    }
}
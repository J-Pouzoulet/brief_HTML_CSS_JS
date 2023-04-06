function myImg() {
    var a = "https://media.istockphoto.com/id/511861274/photo/eating-junk-food.jpg?s=612x612&w=0&k=20&c=E0bjmKKoXnwiN46Errc-AIpTEd4n91dfojYipiPCZYA="; 
    let img = document.createElement("img");
    img.src = a;
    document.getElementById("lbl").appendChild(img);
}

function getInput(){
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = event.currentTarget.querySelector('input')
        console.log(input.value)
        const url = "https://world.openfoodfacts.org/api/v0/product/"+input.value+".json";
        console.log(url)
        let test_API = ''
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.code == null){
                window.location = './page3.html?';
            }
            else {
                window.location = './page2.html?' + `input_value=${input.value}`;
            }
              });
            } 
    )}  
}

getInput()

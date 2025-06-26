const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results');
    if(height < 0 || height == null || isNaN(height) || weight < 0 || weight == null || isNaN(weight)){
        result.innerText = "Enter valid values";
    }
    else{
        result.innerText = (weight / (height * height) / 1000).toFixed(2)
        
    }
})
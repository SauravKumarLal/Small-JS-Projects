const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value) //this usecase will give empty value, page load hote hi value aa jayega height mei

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
        return;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
        return;
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show result
        if(bmi < 18.6){
            results.innerHTML = `<span> ${bmi} </span> <br> You are Under Weight`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span> ${bmi} </span> <br> Your weight is in Normal Range`;
        }
        else{
            results.innerHTML = `<span> ${bmi} </span> <br> You are OverWeight`;
        }
    }
    
})
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);

    const height = document.querySelector('#height').value;
    const [feet,inches] = height.split("'");
    const height_inches = parseInt(feet) * 12 + parseInt(inches);
    
    const bmi = ((weight * 703) / height_inches) / height_inches
    
    const response = document.querySelector('#response-area p')
    if (bmi < 18.5) response.innerHTML = `Your bmi is ${bmi.toFixed(2)}, you are <a href="https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi" style="color: red;" target="_blank" title="Learn more">underweight</a>`
    else if (bmi >= 18.5 && bmi < 25) response.innerHTML = `Your bmi is ${bmi.toFixed(2)}, you are <a href="https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi" style="color: green;" target="_blank" title="Learn more">optimum range</a>`
    else if (bmi >= 25 && bmi < 30) response.innerHTML = `Your bmi is ${bmi.toFixed(2)}, you are <a href="https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi" style="color: red;" target="_blank" title="Learn more">overweight</a>`
    else if (bmi >= 30 && bmi < 35) response.innerHTML = `Your bmi is ${bmi.toFixed(2)}, you are <a href="https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi" style="color: red;" target="_blank" title="Learn more">class I obesity</a>`
    else if (bmi >= 35 && bmi < 40) response.innerHTML = `Your bmi is ${bmi.toFixed(2)}, you are <a href="https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi" style="color: red;" target="_blank" title="Learn more">class II obesity</a>`
    else if (bmi >= 40) response.innerHTML = `Your bmi is ${bmi.toFixed(2)}, you are <a href="https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi" style="color: red;" target="_blank" title="Learn more">class III obesity</a>`
})
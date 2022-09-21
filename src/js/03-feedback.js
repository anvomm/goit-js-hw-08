const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onInputDataStore, 500));
refs.form.addEventListener('submit', onSubmitFormClean);

const formData = {};

automateFormFill();

function onInputDataStore(evt) {

    const dataEneteredBefore = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (dataEneteredBefore) {
        dataEneteredBefore[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataEneteredBefore));
        return;
    };

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function onSubmitFormClean(evt) {
    evt.preventDefault();

    if (refs.input.value === "" || refs.textarea.value === "") {
        return alert("Please fill in all the fields!");
    };
    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);

}

function automateFormFill() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        refs.input.value = savedData[refs.input.name] || '';
        refs.textarea.value = savedData[refs.textarea.name] || '';
    }

}


import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const initValues = localStorage.getItem('feedback-form-state');

if (initValues) {
    try {
        const data = JSON.parse(initValues)
        setFormData(data);
    }
    catch (err) {
        console.error("Can't read saved form data", err);
    }
}

function setFormData(data) {
    for (const [name, value] of Object.entries(data)) {
        form.elements[name].value = value;
    }
}

function getFormData() {
    const formData = new FormData(form);

    return {
        'email': formData.get('email'),
        'message': formData.get('message'),
    };
}

function saveCurrentForm() {
    const data = getFormData();

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

const saveForm = throttle(saveCurrentForm, 500);

form.addEventListener('input', () => {
    saveForm();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = getFormData();
    console.log(data);

    setFormData({ email: "", message: "" });
    saveCurrentForm();
});

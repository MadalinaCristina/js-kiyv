document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.getElementById('personForm');
  const inputButton = personForm.querySelector('button[type="submit"]');

  const pristine = new Pristine(personForm);
  const isValid = pristine.validate(true);

  if (!isValid) {
    inputButton.disabled = true;
  }

  personForm.addEventListener('input', (event) => {
    // event delegation
    const formControl = event.target;

    // event delegation condition
    if (!formControl.name || formControl.name.length <= 0) {
      return;
    }

    const isValid = pristine.validate(true);

    inputButton.disabled = !isValid;
  });

  personForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log('send to server', {
      name: form.name.value,
      surname: form.surname.value,
      age: form.age.value,
      email: form.email.value,
    });
  });
});

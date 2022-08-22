// jQuerys  DOMContentLoaded:
// $(document).ready(function())
// ^ varianta asta e veche si deprecated
// use this instead:

const person = {};

$(function () {
  const $form = $('#personForm').on('submit', function (event) {
    event.preventDefault();
    // this -> pointer to the form
    // this.name -> pointer to the input
    person.name = this.name.value;
    person.surname = this.surname.value;
    person.age = this.age.value;

    const formData = new FormData(this);
    for (const entry of formData) {
      console.log(entry);
    }
  });
});

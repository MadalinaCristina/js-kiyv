document.addEventListener('DOMContentLoaded', () => {
  getPersons();

  document.getElementById('personForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // event.currentTarget este elementul pe are
    // am pus eventhandlerul
    const form = event.currentTarget;
    const name = form.name.value;
    const surname = form.surname.value;
    const id = Date.now().toString();

    postPerson({
      name,
      surname,
      id,
    }).then(() => {
      getPersons();

      form.reset();
    });
  });
});

function getPersons() {
  return fetch('http://localhost:8080/persons')
    .then((response) => {
      return response.json();
    })
    .then((persons) => {
      renderPersons(persons);

      return persons;
    });
}

function renderPersons(persons) {
  const section = document.getElementById('personsDisplay');
  section.innerHTML = '';

  persons.forEach((person) => {
    // destructuring
    const { name, surname } = person;

    const p = document.createElement('p');
    p.innerText = `${name} ${surname}`;

    section.append(p);
  });
}

function postPerson(person) {
  return fetch('http://localhost:8080/persons', {
    method: 'POST',
    body: JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      // response este o instanta de Response
      // .json() ne da TOT un promise
      return response.json();
    })
    .then((data) => {});
}

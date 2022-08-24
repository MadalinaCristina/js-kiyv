// jQuerys  DOMContentLoaded:
// $(document).ready(function())
// ^ varianta asta e veche si deprecated
// use this instead:

// data model / data set / application state
const person = {};
// arrow functions -> no hoisting
const renderSkillsUl = (skillName) => {
  const className = 'skillsUl';
  let $skillsUl = $('.' + className);

  if ($skillsUl.length <= 0) {
    $skillsUl = $('<ul>', {
      class: className,
    });
  }

  const $skillLi = $('<li>').append(
    $('<span>', {
      text: skillName,
      class: 'skillLabel',
    }),
  );
  const $skillInput = $('<input>', {
    type: 'hidden',
    value: skillName,
    name: `skill_${skillName.replaceAll(' ', '')}`,
  });
  $skillLi.append($skillInput);
  // jq variation
  $('<button>', {
    text: '-',
    title: 'Remove skill',
    type: 'button',
    class: 'removeSkillButton',
  }).appendTo($skillLi);

  // jq vartion
  $skillLi
    .append(
      $('<button>', {
        title: 'Edit skill',
        text: 'Edit',
        type: 'button',
        class: 'editSkillButton',
      }),
    )
    .append(
      $('<button>', {
        title: 'Save skill',
        text: 'Save',
        type: 'button',
        class: 'saveSkillButton',
      }).hide(),
    )
    .append(
      $('<button>', {
        title: 'Cancel edit',
        text: 'Cancel',
        type: 'button',
        class: 'cancelEditSkillButton',
      }).hide(),
    );

  $skillsUl.append($skillLi);

  return $skillsUl;
};

const renderPetUl = (petName) => {
  const listClass = 'petUl';
  let ul = document.querySelector(`.${listClass}`);

  if (ul === null) {
    ul = document.createElement('ul');
    ul.classList.add(listClass);
  }

  const petLi = document.createElement('li');
  petLi.innerText = petName;
  const petInput = document.createElement('input');
  petInput.type = 'hidden';
  petInput.name = `pet_${petName.replaceAll(' ', '')}`;
  petInput.value = petName;
  petLi.append(petInput);

  ul.append(petLi);

  return ul;
};

$(function () {
  // form submission step
  const $form = $('#personForm').on('submit', function (event) {
    event.preventDefault();
    // this -> pointer to the form
    // this.name -> pointer to the input
    person.name = this.name.value;
    person.surname = this.surname.value;
    person.age = this.age.value;
    person.skills = person.skills || [];
    person.pets = person.pets || [];

    // loop through optional data
    const formData = new FormData(this);
    for (const entry of formData) {
      // array destructure
      const [inputName, inputValue] = entry;
      // const inputName = entry[0];
      // const inputValue = entry[1];
      if (inputName.startsWith('skill_')) {
        person.skills.push(inputValue);
      }

      if (inputName.startsWith('pet_')) {
        person.pets.push(inputValue);
      }
    }

    this.reset();
    $('.skillsUl').remove();
    $('.personDisplay').remove();

    // wrap form in jquery
    // render returneaza obiect jq si este plasat in DOM
    $(this).after(render(person));
  });

  $form.on('click', '.removeSkillButton', function () {
    // this -> pointer catre button
    $(this).parent().remove();
  });

  $form
    .on('click', '.editSkillButton', function () {
      const $editSkillButton = $(this);

      $editSkillButton.siblings('.removeSkillButton').hide();
      $editSkillButton.siblings('.skillLabel').hide();
      $editSkillButton.siblings('input[name^="skill_"]').attr('type', 'text');
      $editSkillButton.hide();
      $editSkillButton.siblings('.cancelEditSkillButton').show();
      $editSkillButton.siblings('.saveSkillButton').show();
    })
    .on('click', '.cancelEditSkillButton', function () {
      const $cancelEditSkillButton = $(this);

      $cancelEditSkillButton.siblings('.editSkillButton').show();
      $cancelEditSkillButton.siblings('.skillLabel').show();
      $cancelEditSkillButton
        .siblings('input[name^="skill_"]')
        .attr('type', 'hidden');
      $cancelEditSkillButton.hide();
      $cancelEditSkillButton.siblings('.saveSkillButton').hide();
    })
    .on('click', '.saveSkillButton', (event) => {
      const $saveSkillButton = $(event.target);
      const $skillLabel = $saveSkillButton.siblings('.skillLabel').show();
      const $skillInput = $saveSkillButton
        .siblings('input[name^="skill_"]')
        .attr('type', 'hidden');

      const skillName = $skillInput.val();

      $skillLabel.text(skillName);
      $skillInput.attr('name', `skill_${skillName.replaceAll(' ', '')}`);

      $saveSkillButton.siblings('.editSkillButton, .removeSkillButton').show();
      $saveSkillButton.hide();
      $saveSkillButton.siblings('.cancelEditSkillButton').hide();
    });

  // create skills input step
  // form.descendentii-directi.al-doilea-fieldset
  const addSkillText = 'Add skill';
  $form
    .children()
    .eq(1) // 0 based
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Skill',
        name: 'skillInput',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        title: addSkillText,
        class: 'addSkillButton',
        text: addSkillText,
      }).on('click', function () {
        // in function functions, this -> button.addSkillButton
        const $button = $(this);
        const $skillInput = $button.prev();
        const skillName = $skillInput.val();

        if (skillName.length <= 0) {
          return;
        }

        const $ul = renderSkillsUl(skillName);
        $button.after($ul);

        $skillInput.val('');
      }),
    );

  // DOM version
  // array like object
  const petFieldset = $form[0].querySelector('fieldset:nth-child(3)');
  const petInput = document.createElement('input');
  petInput.placeholder = 'Pet';
  petInput.type = 'text';
  petInput.name = 'petInput';
  petFieldset.append(petInput);
  const petInputButton = document.createElement('button');
  petInputButton.innerText = 'Add pet';
  petInputButton.title = 'Add pet';
  petInputButton.type = 'button';
  petInputButton.addEventListener('click', (event) => {
    const petInputButton = event.currentTarget;
    const petInput = petInputButton.previousElementSibling;
    const petName = petInput.value;

    if (petName.length <= 0) {
      return;
    }

    const ul = renderPetUl(petName);
    petInputButton.after(ul);

    petInput.value = '';
  });
  petFieldset.append(petInputButton);

  // hoisting function functions
  function render(person) {
    // all in memory
    const $personDisplay = $('<div>', {
      class: 'personDisplay',
    })
      .append(renderPerson(person))
      .append(renderPersonSkills(person))
      .append(renderPersonPets(person));

    return $personDisplay;
  }

  function renderPerson(person) {
    // destructurare
    const { name, age, surname } = person;
    // const name = person.name;
    // const age = person.age;
    // const surname = person.surname;

    return $('<p>', {
      text: `${name} ${surname}: ${age}`,
    });
  }

  function renderPersonSkills(person) {
    const { skills, ...restOfPerson } = person;
    const { name } = restOfPerson;

    if (skills.length <= 0) {
      return '';
    }

    let message = '';
    skills.forEach(function (skill, index, skills) {
      let punctuation = ', ';
      if (index === skills.length - 1) {
        punctuation = '.';
      }

      if (index === skills.length - 2) {
        punctuation = ' and ';
      }

      message += `${skill}${punctuation}`;
    });

    return $('<p>', {
      text: `${name}'s skills are: ${message}`,
    });
  }

  function renderPersonPets(person) {
    const { pets, ...restOfPerson } = person;

    if (pets.length <= 0) {
      return '';
    }

    return $('<p>', {
      text: pets.toString(),
    });
  }
});

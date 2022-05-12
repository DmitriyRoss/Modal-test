let thanks = document.getElementById('thanks')
var elems = document.body.childNodes
elems = Array.prototype.slice.call(elems)
let [text, header, text2, form, ...rest] = elems
let nameHolder = document.querySelector('.name-holder')
let testBtn = document.querySelector('.testing')

function thank() {
  thanks.innerHTML = 'Спасибо! Данные сохранены.'
}
function inputValidation(name, group, inputNameText, inputGroupText, errorMsg) {
  try {
    !inputGroupText
      ? group.classList.add('input-color-red')
      : (group.classList.remove('input-color-red'),
        group.classList.add('input-color-green'))
    !inputNameText
      ? name.classList.add('input-color-red')
      : (name.classList.remove('input-color-red'),
        name.classList.add('input-color-green'))
    if (inputNameText && inputGroupText) {
      if (!isNaN(inputNameText)) throw "name should'nt be a number"
      if (inputNameText.length <= 1) throw 'name is too short'
      thank(),
        (nameHolder.innerHTML = `Вы зарегистрировались как ${inputNameText}, группа ${inputGroupText}.`)
    } else throw 'Пожалуйста, заполните все поля.'
    testBtn.classList.add('block')
  } catch (err) {
    errorMsg.innerHTML = 'Validator: ' + err
  }
}
function modalTest() {
  let grade = 0
  let inputNameText = document.getElementById('name').value
  let firstStep = confirm(
    `${inputNameText}, вам будет представлено тестирование на тему GCI, продолжить?`
  )
  firstStep
    ? confirm(
        'Для ответов на вопросы используйте цифры 1 и 2, которые отвечают за ответы: "да" и "нет"'
      )
    : alert('Вы вышли из программы тестирования.')
  let secondStep = prompt(
    `Верно ли утверждение: 
    CGI — стандарт интерфейса, используемого для связи внешней программы с веб-сервером.
    1) Да 
    2) Нет`,

    1
  )

  if (parseInt(secondStep) == 1) grade++
  if (secondStep == null) alert('Вы отказались отвечать на вопрос.')
  let thirdStep = prompt(
    `Верно ли утверждение: 
  СGI - модуль выводит информацию в стандартный выходной поток. 
  1) Да 
  2) Нет`,
    1
  )
  if (parseInt(thirdStep) == 1) grade++
  if (thirdStep == null) alert('Вы отказались отвечать на вопрос.')
  let fourthStep = prompt(
    `Верно ли утверждение: 
    CGI определяет 4 информационных потока.
  1) Да 
  2) Нет`,
    1
  )
  if (parseInt(fourthStep) == 1) grade++
  if (fourthStep == null) alert('Вы отказались отвечать на вопрос.')
  let fifthStep = prompt(
    `Верно ли утверждение: 
    Наиболее частая задача, для решения которой применяется CGI — создание интерактивных страниц, содержание которых зависит от действий пользователя.
  1) Да 
  2) Нет`,
    1
  )
  if (parseInt(fifthStep) == 1) grade++
  if (fifthStep == null) alert('Вы отказались отвечать на вопрос.')
  alert(
    `Результаты тестирования: ${grade} баллов из 4. Спасибо за прохождение!`
  )
}
function func() {
  let name = document.getElementById('name')
  let group = document.getElementById('group')
  let inputNameText = document.getElementById('name').value
  let inputGroupText = document.getElementById('group').value

  var errorMsg = document.querySelector('.validator')
  errorMsg.innerHTML = ''
  //here should be try/catch validation for group and name
  inputValidation(name, group, inputNameText, inputGroupText, errorMsg)
}
function switching(button) {
  document.body.classList.contains('dark-theme')
    ? ((button.innerHTML = 'Темная тема'),
      button.classList.remove('white-theme-btn'),
      document.body.classList.remove('dark-theme'),
      document.body.classList.remove('color-white'),
      header.classList.remove('color-white'),
      document.body.classList.add('white-theme'))
    : (button.classList.add('white-theme-btn'),
      (button.innerHTML = 'Светлая тема'),
      document.body.classList.add('color-white'),
      document.body.classList.add('dark-theme'))
}

let themeBtn = document.querySelector('.theme-switcher')
themeBtn.innerHTML = 'Темная тема'

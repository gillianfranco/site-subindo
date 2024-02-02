const toggleBtn = document.querySelector('#toggle-btn');
const toggleBtnIcon = document.querySelector('#toggle-btn p');
const dropDownMenu = document.querySelector('.dropdown__menu_celular .links_principais');

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.innerHTML = isOpen ? '&#10006;' : '&#9776;';
}

const toggleService = document.querySelector("#click__links_secundarios_menu_celular");
const toggleServiceLink = document.querySelector("#click__links_secundarios_menu_celular > p");
const dropDownLinks = document.querySelector(".lista__links_secundarios_menu_celular");

toggleService.onclick = function(){
  dropDownLinks.classList.toggle('active');
}
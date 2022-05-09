/* Variables */

const body = document.body || document.getElementsByTagName('body');

/* Makes The Menu */

const menu = document.createElement('div');
menu.style.display = 'none';
menu.style.width = '150px';
menu.style.height = '100%';
menu.style.background = 'grey';
menu.style.position = 'absolute';
menu.style.left = '0';
menu.style.bottom = '0';
menu.style.zIndex = '1000';
document.body.insertBefore(menu, body.firstChild);

/* Makes The Menu Button */

const menuvalue = document.createElement('button');
const button = document.createElement('img');
menuvalue.style.display = 'none';
button.src = 'https://game-central.github.io/cheat-menu/Images/menu-button.png';
button.style.width = '40px';
button.style.width = '45px';
button.style.draggable = 'false';
button.style.position = 'absolute';
button.style.right = '0';
button.style.top = '0';
button.style.zIndex = '998';
document.body.insertBefore(button, body.firstChild);

/* Makes The Menu Close Button */

const menuclose = document.createElement('img');
menuclose.src = 'https://game-central.github.io/cheat-menu/Images/menu-close.png';
menuclose.style.display = 'none';
menuclose.style.width = '20px';
menuclose.style.position = 'absolute';
menuclose.style.right = '0';
menuclose.style.top = '0';
menuclose.style.draggable = 'false';
menuclose.id = 'menuclose';
menu.insertBefore(menuclose, menu.firstChild);

/* Menu Drag */

button.onmousedown = function (event) {
  button.style.position = 'absolute';
  button.style.zIndex = 100001;
  function moveAt(pageX, pageY) {
    button.style.left = `${pageX - button.offsetWidth / 2}px`;
    button.style.top = `${pageY - button.offsetHeight / 2}px`;
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
  button.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    button.onmouseup = null;
  };
};
button.ondragstart = function () {
  return false;
};

button.addEventListener('click', menuOpenClose);
menuclose.addEventListener('click', menuOpenClose);

/* Menu Contents */

var menutitle = document.createElement('h3');
menutitle.innerHTML = 'Cheat Menu 2.0';
menutitle.style.display = 'none';
menutitle.style.fontSize = '15px';
menutitle.style.left = '0';
menutitle.style.top = '0';
menutitle.style.draggable = 'false';
menu.insertBefore(menutitle, menu.firstChild);

var break1 = document.createElement('br');
menu.insertBefore(break1, menu.lastChild);

/* Menu Buttons */

var MainPageButtonOne = document.createElement('button');
MainPageButtonOne.innerHTML = 'Inspect Element';
MainPageButtonOne.style.fontSize = '15px';
MainPageButtonOne.style.width = '100%';
MainPageButtonOne.style.right = '0';
MainPageButtonOne.style.top = '0';
menu.insertBefore(MainPageButtonOne, menu.lastChild);

var MainPageButtonTwo = document.createElement('button');
MainPageButtonTwo.innerHTML = 'Page invisibilizer';
MainPageButtonTwo.style.fontSize = '15px';
MainPageButtonTwo.style.width = '100%';
MainPageButtonTwo.style.right = '0';
MainPageButtonTwo.style.top = '0';
menu.insertBefore(MainPageButtonTwo, menu.lastChild);



/* Menu Button Clicked */

MainPageButtonOne.onclick = function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);};

MainPageButtonTwo.onclick = function () {var win;win = window.open();win.document.body.style.margin = "0";win.document.body.style.height = "100vh";var iframe= win.document.createElement("iframe");iframe.style.border = "none";iframe.style.width = "100%";iframe.style.height = "100%";iframe.style.margin = "0";iframe.src = window.location.href; win.document.body.appendChild(iframe)};

function menuOpenClose() {
  if (menuvalue.value === '1') {
    menuvalue.value = '0';

    menu.style.display = 'none';
    menuclose.style.display = 'none';
    menutitle.style.display = 'none';

  } else {
    menuvalue.value = '1';

    menu.style.display = 'initial';
    menuclose.style.display = 'initial';
    menutitle.style.display = 'initial';

  }
}

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
menutitle.innerHTML = 'Exploit Menu 2.0';
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

var MainPageButtonThree = document.createElement('button');
MainPageButtonThree.innerHTML = 'Share page';
MainPageButtonThree.style.fontSize = '15px';
MainPageButtonThree.style.width = '100%';
MainPageButtonThree.style.right = '0';
MainPageButtonThree.style.top = '0';
menu.insertBefore(MainPageButtonThree, menu.lastChild);

var MainPageButtonFour = document.createElement('button');
MainPageButtonFour.innerHTML = 'History Flooder';
MainPageButtonFour.style.fontSize = '15px';
MainPageButtonFour.style.width = '100%';
MainPageButtonFour.style.right = '0';
MainPageButtonFour.style.top = '0';
menu.insertBefore(MainPageButtonFour, menu.lastChild);



/* Menu Button Clicked */

MainPageButtonOne.onclick = function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);};

MainPageButtonTwo.onclick = function () {var win;win = window.open();win.document.body.style.margin = "0";win.document.body.style.height = "100vh";var iframe= win.document.createElement("iframe");iframe.style.border = "none";iframe.style.width = "100%";iframe.style.height = "100%";iframe.style.margin = "0";iframe.src = window.location.href; win.document.body.appendChild(iframe)};

MainPageButtonThree.onclick = function () {void((function(svc) {var d = document,w = window,p = 0,b = function() {if (!p) {p = 1;if (_atc.xol) _adr.onReady();if (w.addthis_sendto) addthis_sendto(svc || 'bkmore', {product: 'bmt-' + _atc.ver})} else {p = 0;if (_atw) _atw.clb()}};if (!w._atc) {var ol = w.addthis_onload || [],o = d.createElement('script');w.addthis_product = 'bmt-250';o.src = '//s7.addthis.com/js/250/addthis_widget.js#domready=1&username=bookmarklet';ol.push(b);w.addthis_onload = ol;d.getElementsByTagName('body')[0].appendChild(o)} else b()})())};

MainPageButtonFour.addEventListener("click", function () {

  !function () {
    for (var t = "/", o = 0; o < 50; o++)
      history.pushState(0, 0, t += o.toString())
  }();
});

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

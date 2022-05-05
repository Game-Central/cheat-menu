  /* Variables
  */
  var button = document.createElement('img');
  var body = document.body || document.getElementsByTagName('body');
  var menu = document.createElement("div");
  var menuclose = document.createElement('img');

  /* Makes The Display For The Menu 
  */
  menu.style.width = "0px";
  menu.style.height = "100%";
  menu.style.background = "grey";
  menu.style.position = 'absolute';
  menu.style.left = "0";
  menu.style.bottom = "0";
  menu.style.zIndex = "1000";
  document.body.insertBefore(menu, body.firstChild);

  /* Makes The Display For The Menu Button 
  */
  button.src = "https://game-central.github.io/cheat-menu/Images/menu-button.png";
  button.style.width = "40px";
  button.style.width = "45px";
  button.style.draggable = "false";
  document.body.insertBefore(button, body.firstChild);

  menuclose.src = "https://game-central.github.io/cheat-menu/Images/menu-close.png";
  menuclose.style.width = "0px";
  menuclose.style.position = 'absolute';
  menuclose.style.right = "0";
  menuclose.style.top = "0";
  menuclose.style.draggable = "false";
  menu.insertBefore(menuclose, menu.firstChild);

  /* Menu Clicked
  */
  button.onclick = function() {
    menu.style.width = "200px";
    menuclose.style.width = "20px";
  };
  menuclose.onclick = function() {
    menu.style.width = "0px";
    menuclose.style.width = "0px";
  };

  /* Menu Drag
  */
  button.onmousedown = function(event) {
    button.style.position = 'absolute';
    button.style.zIndex = 100001;
    function moveAt(pageX, pageY) {
     button.style.left = pageX - button.offsetWidth / 2 + 'px';
     button.style.top = pageY - button.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
     moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    button.onmouseup = function() {
     document.removeEventListener('mousemove', onMouseMove);
     button.onmouseup = null;
    };
  };
  button.ondragstart = function() {
    return false;
  };

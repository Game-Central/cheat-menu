  /* Variables */

  var body = document.body || document.getElementsByTagName('body');
  


  /* Makes The Menu */

  var menu = document.createElement("div");
  menu.style.width = "0px";
  menu.style.height = "100%";
  menu.style.background = "grey";
  menu.style.position = 'absolute';
  menu.style.left = "0";
  menu.style.bottom = "0";
  menu.style.zIndex = "1000";
  document.body.insertBefore(menu, body.firstChild);



  /* Makes The Menu Button */

  var menuvalue = document.createElement('button');
  var button = document.createElement('img');
  button.src = "https://game-central.github.io/cheat-menu/Images/menu-button.png";
  button.style.width = "40px";
  button.style.width = "45px";
  button.style.draggable = "false";
  button.style.position = 'absolute';
  button.style.right = "0";
  button.style.top = "0";
  button.style.zIndex = "998";
  document.body.insertBefore(button, body.firstChild);



  /* Makes The Menu Close Button */

  var menuclose = document.createElement('img');
  menuclose.src = "https://game-central.github.io/cheat-menu/Images/menu-close.png";
  menuclose.style.width = "0px";
  menuclose.style.position = 'absolute';
  menuclose.style.right = "0";
  menuclose.style.top = "0";
  menuclose.style.draggable = "false";
  menu.insertBefore(menuclose, menu.firstChild);



  /* Menu Drag */

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



button.onclick = function() {  
if (menuvalue.value == "1") {
    menuvalue.value = "0";


    menu.style.width = "0px";
    menuclose.style.width = "0px";
  } else {
    menuvalue.value = "1";


    menu.style.width = "150px";
    menuclose.style.width = "20px";
  }
};


menuclose.onclick = function() {  
if (menuvalue.value == "1") {
    menuvalue.value = "0";


    menu.style.width = "0px";
    menuclose.style.width = "0px";
  } else {
    menuvalue.value = "1";


    menu.style.width = "150px";
    menuclose.style.width = "20px";
  }
};

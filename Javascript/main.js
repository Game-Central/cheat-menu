if (document.body.contains(document.getElementById('menuadded'))) {
  alert('Menu Already Adedd. If This Is A Mistake, Reload The Page');
} else{
  //Variables
  var button = document.createElement('img');
  var body =document.body || document.getElementsByTagName('body');

  //testing
  menuaddedtester.id = "menuadded"
  var menuaddedtester = document.createElement('a');

  //Makes The Display For The Menu Button 
  button.src = "https://o.remove.bg/downloads/bd4c7cec-44c9-43c1-bcda-c166ed52690c/menu-hamburger-button-logo-chef-menu-button-removebg-preview.png";
  button.style.width = "80px";
  button.style.width = "80px";
  button.style.draggable = "false";
  document.body.insertBefore(button, body.firstChild);

  //Menu Clicked
  button.onclick = function() {
    alert('clicked');
  };

  //Menu Drag
  button.onmousedown = function(event) {
    button.style.position = 'absolute';
    button.style.zIndex = 1000;
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
}

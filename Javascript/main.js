  /* Variables
  */
  var button = document.createElement('img');
  var body = document.body || document.getElementsByTagName('body');

  /* Testing
  */
  var menutester = document.createElement('a');
  menutester.setAttribute('id', 'menuadded');

  /* Makes The Display For The Menu Button 
 */
  button.src = "https://game-central.github.io/cheat-menu/Images/menu-button.png";
  button.style.width = "40px";
  button.style.width = "40px";
  button.style.draggable = "false";
  document.body.insertBefore(button, body.firstChild);

  /* Menu Clicked
  */
  button.onclick = function() {
    alert('clicked');
  };

  /* Menu Drag
  */
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

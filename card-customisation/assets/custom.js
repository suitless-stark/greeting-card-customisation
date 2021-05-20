(function() {
  // variable for the update button
  var getSubmit = document.getElementById('submit');

  // click event on the update button
  getSubmit.onclick = function() {

    // define variables for the changing images
    var chooseImages = document.getElementById('image').value;
    var getImage = document.getElementById('outputImg');

    // define variables for changing bg color
    var chooseBgColor = document.getElementById('background').value;
    var getBgColor = document.querySelector('.card');

    //define variables for changing the fonts
    var chooseFont = document.getElementById('font').value;
    var getFont = document.querySelector('.text');

    // define variables for changing the borders
    var chooseBorder = document.getElementById('border').value;
    var getBorder = document.querySelector('.noBorder');

    // define variables for adding the message
    var getMessage = document.getElementById('message').value;


    // setting up conditionals for changing images
    if (chooseImages === 'christmas') {
      getImage.src = 'assets/christmas.jpg';
    }
    if (chooseImages === 'valentines') {
      getImage.src = 'assets/valentines.jpg';
    }
    if (chooseImages === 'birthday') {
      getImage.src = 'assets/birthday.jpg';
    }

    // setting up conditionals for changing bg color
    if (chooseBgColor === 'celadon') {
      getBgColor.classList.add('celadonBackground');
    } else {
      getBgColor.classList.remove('celadonBackground');
    }

    if (chooseBgColor === 'graphite') {
      getBgColor.classList.add('graphiteBackground');
    } else {
      getBgColor.classList.remove('graphiteBackground');
    }

    if (chooseBgColor === 'rose') {
      getBgColor.classList.add('roseBackground');
    } else {
      getBgColor.classList.remove('roseBackground');
    }

    // setting up conditionals for changing the fonts
    if (chooseFont === 'handwriting') {
      getFont.classList.add('handwriting');
      getFont.classList.remove('sketch');
      getFont.classList.remove('print');
    } else if (chooseFont === 'print') {
      getFont.classList.add('print');
      getFont.classList.remove('sketch');
      getFont.classList.remove('handwriting');
    } else if (chooseFont === 'sketch') {
      getFont.classList.add('sketch');
      getFont.classList.remove('handwriting');
      getFont.classList.remove('print');
    }

    // setting up conditionals for changing the border
    if (chooseBorder === 'none') {
      getBorder.classList.add('noneBorder');
    } else {
      getBorder.classList.remove('noneBorder');
    }
    if (chooseBorder === 'thin') {
      getBorder.classList.add('smallBorder');
    } else {
      getBorder.classList.remove('smallBorder');
    }
    if (chooseBorder === 'thick') {
      getBorder.classList.add('bigBorder');
    } else {
      getBorder.classList.remove('bigBorder');
    }
    if (chooseBorder === 'filled') {
      getBorder.classList.add('filledBorder');
    } else {
      getBorder.classList.remove('filledBorder');
    }

    getFont.textContent = getMessage;
  };
  // click ends


})();

var getBase64Image = function (img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Get the data-URL formatted image
  // Firefox supports PNG and JPEG. You could check img.src to
  // guess the original format, but be aware the using "image/jpg"
  // will re-encode the image.
  var dataURL = canvas.toDataURL("image/png");

  //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  return dataURL;
};

var getImage = function (url, then) {
  var image = new Image();

  image.setAttribute('crossOrigin', 'anonymous');

  image.onload = function () {
    then(getBase64Image(this));
  };

  image.src = url;
};

var Model = function () {
  this.id = 301407;
  this.firstName = "lakis";
  this.lastName = "lalakis";
};

var model = new Model();

model.fullName = ko.computed(function () {
  return this.firstName + ' ' + this.lastName;
}, model);

model.image = function (playerId) {
  return ko.computed(function () {
    return "http://192.20.10.168:3377/api/photos/" + playerId;
 }, model);
};

ko.applyBindings(model);

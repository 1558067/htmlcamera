var landscapeInput = document.getElementById("landscape");
var personInput = document.getElementById("person");
var foodInput = document.getElementById("food");
var animationInput = document.getElementById("animation");

landscapeInput.addEventListener("change", function () {
  showThumbnail(landscapeInput, "thumbnail-landscape");
});

personInput.addEventListener("change", function () {
  showThumbnail(personInput, "thumbnail-person");
});

foodInput.addEventListener("change", function () {
  showThumbnail(foodInput, "thumbnail-food");
});

animationInput.addEventListener("change", function () {
  showThumbnail(animationInput, "thumbnail-animation");
});

function showThumbnail(input, id) {
  var file = input.files[0];
  var imageType = /image.*/;

  if (file && file.type.match(imageType)) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var image = document.getElementById(id);
      image.src = event.target.result;
      image.onload = function () {
        var width = this.width;
        var height = this.height;
        if (width / height > 4 / 3) {
          this.style.height = "100%";
          this.style.width = "auto";
        } else {
          this.style.width = "100%";
          this.style.height = "auto";
        }
      };
    };
    reader.readAsDataURL(file);
  } else {
    alert(
      "選択したファイルは画像ではありません。画像ファイルを選択してください。"
    );
  }
}

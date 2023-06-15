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

        // 画像が横向きの場合、回転情報を補正する
        if (width > height && file.type.match(/^image\/(jpeg|jpg)/)) {
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          var newWidth = height;
          var newHeight = width;
          canvas.width = newWidth;
          canvas.height = newHeight;
          ctx.translate(newWidth / 2, newHeight / 2);
          ctx.rotate((90 * Math.PI) / 180);
          ctx.drawImage(this, -height / 2, -width / 2, height, width);
          ctx.restore();
          image.src = canvas.toDataURL();
          width = newWidth;
          height = newHeight;
        }

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

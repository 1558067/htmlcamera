function showThumbnail(input, id) {
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
  if (input.files && input.files[0]) {
    if (input.files[0].type.indexOf("image") === 0) {
      reader.readAsDataURL(input.files[0]);
    } else {
      alert(
        "選択したファイルは画像ではありません。画像ファイルを選択してください。"
      );
    }
  } else {
    document.getElementById(id).src =
      "https://i.pinimg.com/736x/37/cf/7c/37cf7c0e7257f6ef3509c9eeba3a924b.jpg";
  }
}

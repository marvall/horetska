const galleryImgPath = [
  { url: "./image/gallery/1.jpg", urlSmall: "./image/gallery/1min.jpg" },
  { url: "./image/gallery/2.jpg", urlSmall: "./image/gallery/2min.jpg" },
  { url: "./image/gallery/3.jpg", urlSmall: "./image/gallery/3min.jpg" },
  { url: "./image/gallery/4.jpg", urlSmall: "./image/gallery/4min.jpg" },
  { url: "./image/gallery/5.jpg", urlSmall: "./image/gallery/5min.jpg" },
];

const intfDOM = {
  gallery: document.querySelector(".gallery.wrapper"),
};

const makeGallery = function () {
  intfDOM.gallery.append(
    ...galleryImgPath.map((value, index) => {
      let li = document.createElement("li");
      li.classList.add("gallery-item");
      let img = document.createElement("img");
      img.classList.add("gallery-item-img");
      img.src = value.urlSmall;
      img.setAttribute("style", "width: 360px; height: 240px");
      img.dataset.index = index;
      li.appendChild(img);
      console.log(li);
      return li;
    })
  );
};

makeGallery();

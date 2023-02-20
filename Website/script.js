const container = document.getElementById("porty");
// where "container" is the id of the container
container.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    container.scrollLeft += 100;
    e.preventDefault();
    // prevenDefault() will help avoid worrisome
    // inclusion of vertical scroll
  } else {
    container.scrollLeft -= 100;
    e.preventDefault();
  }
});

vids = document.getElementsByTagName("video");
console.log(vids);
document.getElementsByTagName("video").onended = function () {
  this.load();
  this.play();
};

function adjustPageScale() {
  const width = window.innerWidth;
  const root = document.documentElement;

  let scale = 1;

  if (width >= 992 && width <= 1600) {
    scale = 0.9;
  } else if (width >= 700 && width <= 767) {
    scale = 0.8;
  } else if (width >= 600 && width < 700) {
    scale = 0.75;
  } else if (width <= 600) {
    scale = 0.5;
  }

  root.style.transform = `scale(${scale})`;
  root.style.transformOrigin = "top left";
  document.body.style.height = `${100 / scale}vh`;
}

window.addEventListener("resize", adjustPageScale);
adjustPageScale();

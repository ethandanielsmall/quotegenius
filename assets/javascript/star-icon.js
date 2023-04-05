const starSvg = `
<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
  style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_x0020_1">
    <path
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      class="fil0"></path>
  </g>
</svg>`;

const starElements = document.querySelectorAll('.button-container-div [class^="star-"]');

starElements.forEach(element => {
  element.innerHTML = starSvg;
});

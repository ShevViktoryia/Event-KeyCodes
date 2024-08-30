const wrapper = document.querySelector(".wrapper");
window.onkeydown = (event) => {
  wrapper.innerHTML = `
    <div class="container">
        <p class="container__title">event.key</p>
        <div class="container__key-descr">${
          event.key === " " ? "space" : event.key
        }</div>
      </div>
      <div class="container">
        <p class="container__title">event.keyCode</p>
        <div class="container__key-descr">${event.keyCode}</div>
      </div>
      <div class="container">
        <p class="container__title">event.code</p>
        <div class="container__key-descr">${event.code}</div>
      </div>
    `;
};

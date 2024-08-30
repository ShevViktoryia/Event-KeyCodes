const wrapper = document.querySelector(".wrapper");
window.onkeydown = (event) => {
  wrapper.appendChild(`
    <div class="container">
        <p></p>
        <div class="container__key-descr">Press any key to start</div>
      </div>
    `);
};

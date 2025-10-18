let count = 0;
(function loop() {
  setTimeout(() => {
    if (count === 5) return;
    console.log("hi");
    count++;
    loop();
  }, 1000);
})();

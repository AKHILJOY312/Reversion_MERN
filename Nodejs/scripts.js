// console.log("Start");

// let i = 0;

// function heavyTask() {
//   if (i >= 1e9) {
//     console.log("After heavy loop");
//     return;
//   }

//   // do small chunk of work
//   for (let j = 0; j < 1e6; j++) {
//     i++;
//   }

//   // give control back to event loop
//   setTimeout(heavyTask, 0);
// }

// heavyTask();

// setTimeout(() => {
//   console.log("Timeout executed");
// }, 1000);

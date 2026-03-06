function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, 2000);
  });
}

async function run() {
  console.log("start");

  const result = await waitTwoSeconds();
  console.log(result);

  console.log("end");
}

run();

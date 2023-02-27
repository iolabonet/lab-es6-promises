// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction ("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction ("mashedPotatoes", 2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          getInstruction ("mashedPotatoes", 3, (step4) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
              getInstruction ("mashedPotatoes", 4, (step5) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`;
            },(error) => console.log(error))
          },(error) => console.log(error))
      },(error) => console.log(error))
  },(error) => console.log(error))
},(error) => console.log(error) )

// Iteration 2 - using promises
// ...
// Iteration 2 - using promises
// obtainInstruction(“steak”, 0)
//   .then((instruction1) => {
//     document.querySelector(“#steak”).innerHTML += `<li>${instruction1}</li>`
//     obtainInstruction(“steak”, 1)
//       .then((instruction2) => {
//         document.querySelector(“#steak”).innerHTML += `<li>${instruction2}</li>`
//       })
//       .catch((err) => console.error(err))
//   })
//   .catch((err) => console.error(err))
obtainInstruction("steak", 0)
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 1)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    return obtainInstruction("steak", 7)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
  .catch((err) => console.error(err))




// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();
// Bonus 2 - Promise all
// ...

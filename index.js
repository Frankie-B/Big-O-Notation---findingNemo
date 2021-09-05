const nemo = ['nemo'];

function findNemo (arr) {
  // measuring the perfromance of the code
  let time0 = performance.now()

    for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] == 'nemo') {
      console.log('I found Nemo');
    }
  }
  
  let time1 = performance.now();
  console.log('The code took' + time1 - time0);
}

findNemo(nemo);
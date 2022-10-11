class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
  
  this.intervalId = setInterval(() => {
    
    this.currentTime +=1
    if(printTimeCallback){printTimeCallback()}
  },1000 )
  
  }

  getMinutes() {
    let secondsTominutes = Math.floor(this.currentTime/60);
    return secondsTominutes;

  }

  getSeconds() {
    let minutesToseconds = Math.floor(this.currentTime%60);
    return minutesToseconds;
  }

  computeTwoDigitNumber(value) {
  let valueString = value.toString();

  if(valueString.length === 1) {
    return ("0") + valueString;
  } else {
    return valueString;
  }
 }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

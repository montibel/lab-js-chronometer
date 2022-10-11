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
    return clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return minutes + ":" + seconds; 
    
  }


}

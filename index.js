function produceDrivingRange(blockRange) {
  return (start, destination) => {
    const distance = parseInt(destination) - parseInt(start);
    if (distance < blockRange) {
      return `within range by ${distance}`
    } else {
      return `${distance - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percent) {
  return total => percent * total;
}

function createDriver(){
  
}
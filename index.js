var katzDeliLine = [];
function takeANumber(lineNo, personName){
  return `Welcome, ${personName} You are number ${lineNo} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.lenth <= 0){
    return "There is nobody waiting to be served!";
  }else {
    return katzDeliLine.shift();
  }
}

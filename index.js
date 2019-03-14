var katzDeliLine = [];
function takeANumber(lineNo, personName){
  return `Welcome, ${personName} You are number ${lineNo} in line.`;
}
function nowServing(deli){
  if(deli.lenth <= 0){
    return "There is nobody waiting to be served!";
  }else {
    var currentServing = deli.shift();
    return "Currently serving " + currentServing + ".";
  }
}

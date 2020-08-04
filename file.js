function getDocumentId(id){
  return document.getElementById(id);
}
function getOutputValue(id){
   const getOutput=getDocumentId(id);
   return getOutput.value;
}
function printOutputValue(num){
   const printOutput=getDocumentId('numbers-output')
    printOutput.value=num;
}
function getTryLeft(){
   const getTryLeft=getDocumentId('tryLeftPart');
   return parseInt(getTryLeft.innerText);
}
function printTryLeftValue(num){
  const printTryLeft=getDocumentId('tryLeftPart');
 printTryLeft.innerText=num;
}
function notiFication(id,value) {
   const notify=getDocumentId(id);
   notify.style.display=value;
}
//pinGenerator part
const pinGenerator=getDocumentId('pin-button');
pinGenerator.addEventListener('click',function()
{
  const randomValue=Math.floor(Math.random()*(9999-1000+1))+1000;
  document.getElementById('pin-value').value=randomValue;
})
//Numbers part
let input=document.getElementsByClassName('button');
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('click',function() {
    if(this.id=='backspace')
    {
             const n=getOutputValue('numbers-output');
             const result=n.substr(0,n.length-1);
             printOutputValue(result);
    }
    else if(this.id=='clear')
    {
           printOutputValue("");
    }
    else{
          var output=getOutputValue('numbers-output');
          output=output+this.id;
          printOutputValue(output);
    }
  })
}
//submitButton part
document.getElementById('submit-button').addEventListener('click',function(){
	const pinValue=getOutputValue('pin-value');
	const numberValue=getOutputValue('numbers-output');
	let tryLeft=getTryLeft();
	if(pinValue==numberValue && tryLeft>0)
	{
       notiFication('notifyTwo','block');
       notiFication('notifyOne','none');
       printOutputValue("");
       printTryLeftValue(3);
	}
	else{
       notiFication('notifyOne','block');
       notiFication('notifyTwo','none');
       printOutputValue("");
       if(tryLeft>0)
       {
       	 tryLeft--;
         printTryLeftValue(tryLeft);
       }
       else{
          const button=getDocumentId('submit-button');
          button.disabled=true;
       	  notiFication('notifyTwo','none');
          notiFication('notifyOne','none');
       }
	}
})
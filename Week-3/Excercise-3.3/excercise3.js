/*function createIncrement() {
  
  let count=0;
  function increment() {
    count++;
  }
  let message=`Count is${count}`;
  
  function log(){
    console.log(message);
  }
  return[increment,log];

}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();*/

/* Ouput of this program is count is0*/

//why
/* This is beacuse message variable was initialized when coun was 0
eventhough the value is upadated the message still refering the old value.that why the output is "Count is0"*/


/*if want to update the value of count then it need to write the message variable inside the function*/
function createIncrement() {
  
    let count=0;
    function increment() {
      count++;
    }
    let message=`Count is${count}`;
    
    function log(){
      let message=`Count is${count}`;//message variable
      console.log(message);
    }
    return[increment,log];
  
  }
  const[increment,log] = createIncrement();
  increment();
  increment();
  increment();
  log();// count is3
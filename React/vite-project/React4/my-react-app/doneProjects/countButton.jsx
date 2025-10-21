//Responding to the events

function myButton(){
  const [count,setCount]= useState(0);


  function handle(){
    setCount(count+1);
  }

  return (
    <button onClick={handle}>Click {count} times </button>
  )
}

export default myButton;

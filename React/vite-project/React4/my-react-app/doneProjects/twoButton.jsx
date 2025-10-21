export default function App() {
  const [count, setCount] = useState(0);


  
  function MyButton({count,onClick}){
    return (
      <button count ='count' onClick={HandleClick}>Clicked {count} times</button>

    )
  }
  function HandleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1></h1>
      <MyButton count={count}/>
      <MyButton count={count}/>
    </div>
  );

}

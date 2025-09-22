

function Item({name, packed}){
  return(
    <li className="someName">{name} {packed && "😀" }</li>
  )
}

export default function PackingList(){
  return(
    <section>
      <h1>packing list</h1>
      <ul>
        <Item packed={true} name="someName"></Item>
        <Item packed={true} name="someName"></Item>
        <Item packed={false} name="someName"></Item>
      </ul>
    </section>
  )
}
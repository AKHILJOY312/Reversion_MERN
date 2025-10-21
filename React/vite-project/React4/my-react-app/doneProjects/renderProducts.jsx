
//rendring list 
const product = [
  {title:'Cabbage',id:1},
  {title:'Carrot',id:2},
  {title:"WaterMelon",id:3}
];
const listItems=product.map(product=>
  <li key = {product.id}>
    {product.title}
  </li>
)
function someFUntion(){
return (
  <ul>{listItems}</ul>
);
}

export default someFUntion;
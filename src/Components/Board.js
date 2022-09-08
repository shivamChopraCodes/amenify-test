import { useEffect, useState } from "react";
import { pieces } from "../static";
import Check from "./Check";

const Board = () => {
  const [array,setArray] = useState([])
useEffect(()=>{  let tempArray = []
    for (let i = 0; i<= 63;i++) {

const img = ''
        let color = i===0 ? 'orange' : i%8  === 0? tempArray[i-1]?.colorClass  : tempArray[i-1]?.colorClass === 'orange' ? 'red' : 'orange';
        if(i < 16 || i > 55 ) {
            Object.values(pieces.black).forEach(val=> val.position.includes(i) ? img = val.img : null )
        } 
        tempArray = [...tempArray,{index: i, colorClass: color,img }]
    }
    setArray(tempArray)},[])
    return ( 
        <div className=" flex flex-wrap  "  style={{maxWidth: '32rem'}} >
            {
                array.map(item=><Check key={item.index} colorClass={ item.colorClass}  img = {item.img} value={item.index} />)
            }
        </div>
     )
}

export default Board;
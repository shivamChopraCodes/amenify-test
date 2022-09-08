import { useEffect, useState } from "react";
import { pieces, rules } from "../static";
import Check from "./Check";

const Board = () => {
  const [array,setArray] = useState([])

  const [selectedPieces,setSeletedPieces] = useState({
    piece: '',
    initial: null,
    target: null
  })

  useEffect(()=>{
      if(!selectedPieces.target) return
      let tempArray = JSON.parse(JSON.stringify([...array]))
   if (rules[selectedPieces.piece]){
   if(rules[selectedPieces.piece]?.indexGap.includes(selectedPieces.target - selectedPieces.initial)) {
    console.log(tempArray[selectedPieces.initial],tempArray[selectedPieces.target]);
    const {piece,img} = tempArray[selectedPieces.initial]
    tempArray[selectedPieces.target] = {...tempArray[selectedPieces.target], piece,img}
    tempArray[selectedPieces.initial] = {...tempArray[selectedPieces.initial], piece:'',img:''}
    setArray([...tempArray])
   } else alert('Not a valid move')
} else alert('Please click on King first')
   
   setSeletedPieces({
    piece: '',
    initial: null,
    target: null
  })
  },[selectedPieces.target])

useEffect(()=>{  let tempArray = []
    for (let i = 0; i<= 63;i++) {


    let pieceValues = {}
        let color = i===0 ? 'orange' : i%8  === 0? tempArray[i-1]?.colorClass  : tempArray[i-1]?.colorClass === 'orange' ? 'red' : 'orange';
        if(i < 16 || i > 47 ) {
            const obj = i < 16 ? 'black' : 'white'
            Object.entries(pieces[obj]).forEach(([key,val])=> val.position.includes(i) ? pieceValues = {piece:key ,img:val.img} : null )
        } 
        tempArray = [...tempArray,{index: i, colorClass: color,...pieceValues}]
    }
    setArray(tempArray)},[])
    return ( 
        <div className=" flex flex-wrap  "  style={{maxWidth: '32rem'}} >
            {
                array.map(item=><Check setSeletedPieces={setSeletedPieces} key={item.index} colorClass={ item.colorClass} pieceType={item.piece} img = {item.img} value={item.index} />)
            }
        </div>
     )
}

export default Board;
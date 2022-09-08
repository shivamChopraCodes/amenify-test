const Check = ({colorClass,value,img, pieceType,setSeletedPieces}) => {
 const handleClick = () => {

    setSeletedPieces(prev=> ({
        ...(prev.initial ? {...prev,target: value} : {...prev, piece:pieceType, initial: value})
    }))
 }

    return <div style={{width: '4rem', height: '4rem' }} className={`cursor-pointer bg-${colorClass}-200`} 
    onClick={handleClick}
    >

     { img &&  <img src={img}/>}
    </div>
}

export default Check;
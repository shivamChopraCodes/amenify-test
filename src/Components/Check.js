const Check = ({colorClass,value,img}) => {
    return <div style={{width: '4rem', height: '4rem' }} className={`bg-${colorClass}-200`} >
        {value}
        <img src={img}/>
    </div>
}

export default Check;
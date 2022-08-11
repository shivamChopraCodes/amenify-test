const Testimonial = () => {
    return ( 
        <div className='w-full flex-col-center rounded bg-primary py-4 text-white my-6' >
            <img src='/images/testionial-img.png' alt={'testimonial cleaning'} width={'80px'} />
            <div className='flex-row-center my-6' >
                {
                    [...Array(5).keys()].map(key=><img src='/images/star-icon.svg' alt={'star icon'} key={key} />)
                }
            </div>
                <p className='font-normal text-base text-center tracking-wide' >3,000+ five-star resident reviews</p>
                <p className='font-normal text-xs text-center tracking-wide w-3/4 my-4 leading-5' >“This saves me hundreds each month, easily.<br /> It’s the best amenity I’ve ever had.” <br />- Annie P., Seattle</p>
        </div>
     );
}
 
export default Testimonial;
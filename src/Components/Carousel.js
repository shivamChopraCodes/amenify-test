const Carousel = () => {
    return (
        <>
        <div className='w-full overflow-x-auto my-3' >
            <div className='flex gap-x-2' >
                {
                    [...Array(5).keys()].map((key, i) => <img key={key} width={'170px'} src={`/images/carousel-${i % 2 === 0 ? 2 : 1}.png`} alt={'caorusel img'} />)
                }
            </div>
        </div>
            <section className='flex flex-col items-start text-primary mt-4' >
              <p className='font-normal text-base tracking-wider' >Take N Bake</p>
              <p className='font-normal text-sm tracking-wider pr-7 my-2' >Hosting a get-together? We got you. Check out our chef-prepared family-style meals.</p>
              <button className='bg-[#424242] font-normal text-sm rounded-2xl text-white py-1 px-2 tracking-wide my-2' >See the menu</button>
            
            </section>
        </>
    );
}

export default Carousel;
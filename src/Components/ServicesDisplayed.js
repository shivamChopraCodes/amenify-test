const ServicesDisplayed = () => {
    return (
        <div className='flex-col-center my-6' >
            <div className='relative' >
                <img src='/images/see-cleaning-bg.png' alt={'See Cleaning'} />
                <div className='absolute h-full w-full flex flex-col-reverse top-0 left-0 z-10'>
                    <section className='flex-col-center pb-5' >
                        <p className='font-light text-white text-base tracking-wider' >A clean and happy home.</p>
                        <p className='font-light text-white text-sm tracking-wider my-4 mx-7 text-center' >Enjoy special pricing when you leave the cleaning to our local community pros.</p>
                        <button className='bg-transparent font-medium text-sm tracking-wide text-[#BDBDBD] border border-[#BDBDBD] rounded-3xl py-1 px-2' >
                            See Cleaning
                        </button>
                    </section>
                </div>
                <div className='dark-bg-gradient' />
            </div>
            <div className='flex-col-center mt-10 text-primary' >
                <img className='w-1/3' src='/images/broom.png' alt={'Broom.png'}  />
                <p className='font-normal text-base tracking-wide ' >We leave a little sparkle.</p>
                <p className='font-normal text-sm tracking-wide text-center w-2/3 my-4' >Members enjoy special pricing so leave the chores to us.</p>
                <button className='bg-[#A8D1D0] font-medium text-sm tracking-wide border rounded-3xl py-1 px-2' >
                    See Chores
                </button>
            </div>
        </div>
    );
}

export default ServicesDisplayed;
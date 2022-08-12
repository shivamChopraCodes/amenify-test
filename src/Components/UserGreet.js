const servicesData = [
    {
        title: 'cleaning',
        info: 'Starting at $75',
        img: '/images/cleaning.png',
    },
    {
        title: 'chores',
        info: 'Starting at $5',
        img: '/images/chores.png',
    },
    {
        title: 'food delivery',
        info: 'Starting at $5',
        img: '/images/food-delivery.png',
    }
]

const UserGreet = () => {
    return (
        <div className='flex-col-center pt-24 w-full' >
            <div className='flex-col-center' >
                <img src='/images/user-profile.png' alt='User Profile' width={'80px'} height={'80px'} />
                <h2 className='font-medium text-xl text-primary tracking-wide my-2' >Good morning, Kaylie</h2>
                <p className='font-medium text-xs text-secondary tracking-wider text-center px-10' >What can Gables Columbus Center + Amenify do for you today?</p>
            </div>
            <div className='flex-col-center w-full my-6' >
                <p className='font-normal text-base text-primary tracking-wide text-left w-full mb-2' >Browse your services</p>
                <div className='grid grid-services grid-cols-[repeat(auto-fill,_30%)] justify-between grid-flow-row	 w-full my-2 gap-2' >
                {
                    servicesData.map((service,i)=><div key={service.img} className={`flex flex-col items-start`} >
                        <div className='bg-[#F5F5F5] py-1 flex-row-center w-full hover:border hover:border-[#ABD1D0] rounded nm, '>
                            <img className={`${ i===2 ? 'w-5/6' : 'w-full'}`} src={service.img} alt={'Service'} width={service.width} />
                        </div>
                        <p className='font-medium text-xs text-primary capitalize my-2' >{service.title}</p>
                        <p className='font-medium text-xs text-secondary' >{service.info}</p>
                    </div>)
                }
                </div>
            </div>
            <div className='flex-col-center my-4 mt-6 w-full rounded bg-banner py-4 border border-[#E0CDD1] px-2 text-center' >
                <p className='font-medium text-xs tracking-wide' >Your Amenify Wallet balance:</p>
                <p className='font-normal text-base tracking-wider mt-2' >You have <span className='font-bold' >$25</span> towards your next order!</p>
            </div>
            <p className='font-medium text-[10px] text-secondary text-center' >Your balance will automatically be applied to your next purchase.</p>
        </div>
    );
}

export default UserGreet;
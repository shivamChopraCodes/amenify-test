const MenuSection = () => {
    return (
        <div className='w-full flex-col-center my-2 text-primary' >
            <div className='w-full flex-col-center mb-7 text-primary' >
                <img className='w-full' src='/images/lunch-menu-bg.png' alt={'Lunch bg'} />
                <section className='w-full bg-gradient-white -mt-8 flex-col-center py-4'>
                    <p className='font-normal text-base tracking-wider' >Treat yourself.</p>
                    <p className='font-normal text-sm tracking-wider text-center w-3/5 my-4' >Chef-prepared delicious meals handcrafted and delivered.</p>
                    <button className='bg-[#424242] text-sm font-normal rounded-2xl text-white py-1 px-2 tracking-wide mb-2' >See the Lunch menu</button>
                </section>
            </div>
            <div className='w-full flex-col-center mt-7 text-primary' >
                <img src='/images/dinner-menu.png' alt={'Dinner bg'} width={'167px'} />
                <section className='w-full flex-col-center py-4'>
                    <p className='font-normal text-base tracking-wider' >Dinner has never been easier.</p>
                    <p className='font-normal text-sm tracking-wider text-center w-3/5 my-4' >Chef-prepared delicious meals handcrafted and delivered.</p>
                    <button className='bg-[#424242] text-sm font-normal rounded-2xl text-white py-1 px-2 tracking-wide' >See the Dinner menu</button>
                </section>
            </div>
            <div className='w-full rounded bg-[#B2C5AB] flex flex-col items-start text-primary p-4 my-3' >
                <p className='font-normal text-base tracking-wider mb-1' >We care about your safety.</p>
                <p className='font-normal text-sm leading-5 tracking-wider my-3' >In light of COVID-19, we have updated all onsite protocols to protect your health and safety.</p>
                <p className='font-medium text-sm leading-6 tracking-wide' >Learn more</p>
            </div>
        </div>
    );
}

export default MenuSection;
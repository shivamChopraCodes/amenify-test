import { useState } from "react"

const Navbar = () => {
    const [activeTab,setActiveTab] = useState(0)
    return (
        <nav className='bottom-0 left-0 z-20 bg-[#F5F5F5] w-full fixed flex-row-center text-sm leading-[22px] font-medium text-secondary' >
            <a className={`py-5 w-1/3 text-center ${activeTab === 0 && 'text-primary border-b-2 border-primary'} `} onClick={()=>setActiveTab(0)}>Home</a>
            <a className={`py-5 w-1/3 text-center ${activeTab === 1 && 'text-primary border-b-2 border-primary'} flex items-center justify-center`} onClick={()=>setActiveTab(1)}>Agenda<span className='bg-[#A8D1D0] text-primary text-xs leading-[12px] tracking-wider rounded-full py-1 px-[6px] ml-2' >2</span> </a>
            <a className={`py-5 w-1/3 text-center ${activeTab === 2 && 'text-primary border-b-2 border-primary'} `} onClick={()=>setActiveTab(2)}>Settings</a>
        </nav>
    )
}
export default Navbar
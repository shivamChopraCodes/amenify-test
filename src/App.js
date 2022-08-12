import './App.css';
import UserGreet from './Components/UserGreet';
import ServicesDisplayed from './Components/ServicesDisplayed';
import Testimonial from './Components/Testimonial';
import MenuSection from './Components/MenuSection';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='metropolis w-full max-w-screen-sm flex-col-center mx-auto px-4 pb-20 relative'>
      <UserGreet />
      <ServicesDisplayed />
      <Testimonial />
      <MenuSection />
      <Carousel />
      <Footer />
      <Navbar />
      <img src='/images/message-icon.svg' className='fixed right-1 bottom-24 z-20' alt={'message icon'} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import UserGreet from './Components/UserGreet';
import ServicesDisplayed from './Components/ServicesDisplayed';
import Testimonial from './Components/Testimonial';
import MenuSection from './Components/MenuSection';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='metropolis w-full max-w-screen-md flex-col-center mx-auto px-4'>
      <UserGreet />
      <ServicesDisplayed />
      <Testimonial />
      <MenuSection />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

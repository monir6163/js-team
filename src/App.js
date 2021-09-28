import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import DeveloperTeam from './Components/DeveloperTeam/DeveloperTeam';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Banner></Banner>
      <DeveloperTeam></DeveloperTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;

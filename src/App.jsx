import './App.css';
import MainSocial from './components/MainSocial';
import { SocialProvider } from './components/SocialContext';

function App() {

  return (
    <SocialProvider>
      <MainSocial/>
    </SocialProvider>
  )
};

export default App;

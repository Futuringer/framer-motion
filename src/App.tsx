import MagnetWrapper from "./components/magnet-wrapper";
import "./index.css";
import {TwoImage} from './assets/two'

function App() {
  return (
    <main className='flex items-center justify-center flex-col h-screen bg-gray-900 w-full'>
      <div className='grid grid-cols-4 w-3/4'>
          <MagnetWrapper>
            <TwoImage className="w-32"/>
          </MagnetWrapper>
          <MagnetWrapper>
            <TwoImage className="w-32"/>
          </MagnetWrapper>
      </div>
    </main>
  );
}

export default App;

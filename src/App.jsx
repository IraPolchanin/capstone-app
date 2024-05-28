import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ParamsWithIndex from './components/ParamsWithIndex';
import ParamsWithTitle from './components/ParamsWithTitle';
import TabsWithParams from './components/TabsWithParams';

function App() {
  return (
    <>
      <Routes>
        <Route element={<TabsWithParams />} path='/' />
        <Route element={<ParamsWithIndex />} path='/params-with-index' />
        <Route element={<ParamsWithTitle />} path='/params-with-title' />
      </Routes>
    </>
  );
}

export default App;

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasks from './pages/Tasks';
import Add from './pages/Add';
import Update from './pages/Update';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

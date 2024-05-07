import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tasks from './pages/Tasks';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

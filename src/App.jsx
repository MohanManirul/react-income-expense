import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/income" element={<Income/>}/>
          <Route path="/expense" element={<Expense/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


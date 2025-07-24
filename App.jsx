import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import CoffeesList from "./Components/CoffeesList";
import IngredientsList from "./Components/IngredientsList";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffees" element={<CoffeesList />} />
        <Route path="/ingredients" element={<IngredientsList />} />
      </Routes>
    </Router>
  );
};

export default App;

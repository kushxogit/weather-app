import logo from './logo.svg';
import './App.css';
import Header from "./components/WeatherComponents/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Weather from './components/WeatherComponents/Weather';
import WeatherRealtime from './components/WeatherComponents/WeatherRealTime';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Weather />} /> {/* Set Weather as the default route */}
          <Route path="/Weather" element={<Weather />} />
          <Route path="/WeatherRealtime" element={<WeatherRealtime />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

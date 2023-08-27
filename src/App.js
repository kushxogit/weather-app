import logo from './logo.svg';
import './App.css';
import Header  from "./components/WeatherComponents/Header";
import {
  createBrowserRouter,
  RouterProvider, BrowserRouter, Routes, Route, Link
} from "react-router-dom";
import Weather from './components/WeatherComponents/Weather';
import WeatherRealtime from './components/WeatherComponents/WeatherRealTime';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/Weather" element={<Weather />} />
        <Route path="/WeatherRealtime" element={<WeatherRealtime />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

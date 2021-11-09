import "./App.css";
import "tailwindcss/tailwind.css";

import { Routes, Route } from "react-router-dom";
import QuoteGen from "./components/QuoteGen";
import TodoPage from "./pages/TodoPage";
import TheNavbar from "./components/TheNavbar";

function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-200 to-blue-500">
      <TheNavbar />
      <Routes>
        <Route path="/" element={<QuoteGen />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;

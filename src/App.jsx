import { useEffect } from "react";
import Project from "./Project";
// import Utopia from './gpt/App'

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loading = document.querySelector(".loading");
      if (loading) {
        loading.classList.remove("loading");
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading">
      <Project />
    </div>
  );
};

export default App;

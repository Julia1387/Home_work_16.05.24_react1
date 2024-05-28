import { useState } from "react";
import "./App.css";
import CustomButton from "./Components/UI/Posts/CustomButton/CustomButton";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import Posts from "./Components/UI/Posts/Posts";
import PostItem from "./Components/UI/Posts/PostItem";
import cls from "./Components/UI/Posts/CustomButton/CustomButton.module.css";

function App() {
  const [isRendered, setIsRendered] = useState(false);
  console.log(isRendered);
  function handleChange() {
    setIsRendered(!isRendered);
  }

  return (
    <>
      <Header />

      <h1>Модальные окна</h1>

      <div>
        <button className={cls.btn} onClick={handleChange}>
          Fetch
        </button>
        {isRendered && (
                   <Posts onHandleClick={() => setIsRendered(isRendered)} />
        )}
      </div>
      <Footer />
    </>
  );
}
export default App;

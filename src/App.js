import s from './App.module.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TaskContent from "./components/content/tasksContent/TaskContent";

const App = () => {
    return (
        <div className={s.appWrapper} >
            <Header />
            <Navbar />
            <TaskContent />
        </div>
    );
}

export default App;

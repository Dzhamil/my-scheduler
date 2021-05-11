import s from './App.module.css';
import Task from "./components/tasksContent/task/Task";
import InputTaskArea from "./components/tasksContent/addNewTaskArea/InputTaskArea";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
        <div className={s.appWrapper} >
            <Header />
            <Navbar />
            <div className={s.appContent}>
                <Task/>
                <Task/>
                <Task/>
                <InputTaskArea/>
            </div>
        </div>
    );
}

export default App;

import s from './App.module.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <Header percent={props.state.taskData.percent}/>
            <Navbar navbarData={props.state.navbarData}/>
            <Content contentData={props.state.contentData}/>
        </div>
    );
}

export default App;

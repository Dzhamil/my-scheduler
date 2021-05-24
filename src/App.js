import s from './App.module.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TaskContent from "./components/content/tasksContent/TaskContent";
import StatisticContent from "./components/content/statisticContent/StatisticContent";
import {BrowserRouter, Route} from "react-router-dom";
import FinanceContent from "./components/content/financeContent/FinanceContent";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Route path='/tasks' component={TaskContent}/>
                    <Route path='/finance' component={FinanceContent}/>
                    <Route path='/statistic' component={StatisticContent}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

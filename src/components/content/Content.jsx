import s from "./Content.module.css"
import {Route} from "react-router-dom";
import TaskContent from "./tasksContent/TaskContent";
import FinanceContent from "./financeContent/FinanceContent";
import StatisticContent from "./statisticContent/StatisticContent";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path='/tasks' render={() => <TaskContent taskData={props.contentData.taskData}/>}/>
            <Route path='/finance' render={() => <FinanceContent/>}/>
            <Route path='/statistic' render={() => <StatisticContent/>}/>
        </div>
    );
}

export default Content;
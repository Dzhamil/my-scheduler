import s from './Task.module.css'
import CornerPanel from "./panels/cornerPanel/CornerPanel";
import BottomPanel from "./panels/bottomPanel/BottomPanel";
import LeftPanel from "./panels/leftPanel/LeftPanel";
import RightPanel from "./panels/rightPanel/RightPanel";
import TopPanel from "./panels/topPanel/TopPanel";
import InfoPanel from "./panels/infoPanel/InfoPanel";

const Task = (props) => {
    return (
        <div className={s.task}>
            <CornerPanel/>
            <TopPanel percent={props.percent}/>
            <CornerPanel/>
            <LeftPanel/>
            <InfoPanel category={props.category} description={props.description}/>
            <RightPanel/>
            <CornerPanel/>
            <BottomPanel/>
            <CornerPanel/>
        </div>
    );
}

export default Task;
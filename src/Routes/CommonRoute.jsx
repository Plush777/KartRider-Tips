import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import SubSpeed from "../components/sub/SubSpeed";
import SubItem from "../components/sub/SubItem";

const CommonRoute = (props) => {
    return ( 
        <Suspense fallback={<div>로딩중</div>}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/mode/speed" element={<SubSpeed/>}/>
                <Route path="/mode/item" element={<SubItem/>}/>
                <Route path="*" element={<div>안돼 돌아가</div>} />
            </Routes>
        </Suspense>
     );
}

export default CommonRoute;
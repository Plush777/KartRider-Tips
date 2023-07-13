export default function Loading(){
    return(
        <div id="loadWrap">
            <img src="/img-loading.png" alt="로딩중"/>
            <div id="load">
                <span className="loadRoot">
                <span className="loadBar1"></span>
                <span className="loadBar2"></span>
                </span>
            </div>
            <div className="txtArea">
                <p className="loadTxt">로딩중이에요. 잠시만 기다려주세요!</p>
            </div>
        </div>
    )
}
import BackGroundSvg from "../../global_components/BackGroundSvg"

import "../not_found/scss/not_found.scss"

export default function NotFound({children}) {
    return (
        <>
            <BackGroundSvg />
            <div className="notfound-box">
                <h1 className="notfound-box__head">{children}</h1>
                <p className="notfound-box__icon">🙁</p>
                <button onClick={()=> {}} className="notfound-box__back-btn">На главную</button>
            </div>
        </>
    )
}
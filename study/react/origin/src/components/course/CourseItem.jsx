// [1] if 문 사용
// function HeartIconBtn({ isFavorite = false }) {
//     // True 일때만 채워진 아이콘 반환
//     if(isFavorite) {
//         return (
//             <button className="btn">
//                 <img className="icon-heart" src="/img/heart-fill-icon.svg" />        
//             </button>
//         )
//     }

//     return (
//         <button className="btn">
//             <img className="icon-heart" src="/img/heart-icon.svg" />        
//         </button>
//     )    
// }

// 삼항 연산자 사용
function HeartIconBtn({ isFavorite = false }) {
    return (
        <button className="btn">
            {
                // isFavorite ?
                // <img className="icon-heart" src="/img/heart-fill-icon.svg" /> :
                // <img className="icon-heart" src="/img/heart-icon.svg" />

                <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"} />
            }
        </button>
    )   
}

function LinkIconBtn({ link }) {
    return (
        <a className="btn" href={link} target="_blank" rel="noreferrer">
            <img className="btn__img" src="/img/link-icon.svg" /> 
        </a>
    )
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {
    return (
        <article className="course">
            <img className="course__img" src={thumbnail} alt="강의 이미지"/>
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className="course__icons">
                <HeartIconBtn isFavorite={isFavorite} />
                { link && <LinkIconBtn link={link} /> }
            </div>
        </article>
    );
}

import { useParams } from "react-router-dom";


const Detail = ({ itm }) => {
    const { id } = useParams();
    const deTailItm = itm.find(it => it.id == id);
    console.log(deTailItm);
    // 자료를 가져와서 자료에 매칭되는 거를 여기에 뿌린다.
    // javascript 에서 브라우저 주소창에 paramater 값과 일치하는 배열에 있는 값을 구하는 방법
    return (
        <>
            <div>detail {id}</div>
            <div>
                {
                    <img src={deTailItm.image_link} alt="" />
                }
            </div>
        </>

    )

}

export default Detail;
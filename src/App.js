import Header from "./component/Header";
import Content01 from "./component/Content01";
import Content02 from "./component/Content02";
import Content03 from "./component/Content03";
import Footer from "./component/footer";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./component/Detail";
import { DATA } from "./data/data";
import { useEffect, useState } from "react";

const App = () => {
    const [itm, setItm] = useState([]);
    const getItm = async () => {
        const itm = await fetch('https://desipossa.github.io/shop_cra/assets/data.json').then(r => r.json());
        console.log(itm);
        setItm(itm);
    }
    useEffect(() => {
        getItm();

    }, []);
    return (
        <>
            <Header />
            <section>
                {
                    itm.slice(100, 110).map(it => {
                        return (
                            <div>
                                <Link to={`/Detail/${it.id}`}>
                                    <img src={it.image_link} alt="" />
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
            <Routes>
                <Route path="/" element={<Content01 />}></Route>
                <Route path="01" element={<Content01 />}></Route>
                <Route path="02" element={<Content02 />}></Route>
                <Route path="03" element={<Content03 />}></Route>
                <Route path="/Detail/:id" element={<Detail itm={itm} />}></Route>
            </Routes>
            <Footer />
        </>
    )
};

export default App;
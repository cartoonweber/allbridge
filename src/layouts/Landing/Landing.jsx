import React, { useEffect, useRef, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';
import LandingItem from '../../components/LandingItem/LandingItem';
import './style.scss';


export default function Landing() {
    const [page, setPage] = useState(0);
    const bpage = useRef(null);
    const rpage = useRef(null);
    useEffect(() => {
        rpage.current.className = "";
        bpage.current.className = "";
        page ? rpage.current.className = "active" :
            bpage.current.className = "active";
    }, [page])
    return (
        <div className="landing">
            <div className="top">
                <img src="logo.svg" width="auto" height="62px" className="logo" />
                <div className="toolbar">
                    <div ref={bpage} onClick={() => setPage(0)}>Bridge</div>
                    <div ref={rpage} onClick={() => setPage(1)}>Receive</div>
                </div>
            </div>
            <div className="bridgepage" style={{ display: page ? "none" : "" }}>
                <LandingItem title="Choose blockchain and asset" number={1} active>
                    <div className="main">
                        <div className="detail">
                            From
                            <button className="from">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src="solana.png" width="24" style={{ marginRight: "12px" }} />
                                    <span>Solana</span>
                                </div>
                                <FaChevronDown />
                            </button>
                        </div>
                        <div className="arrowdown">
                            <span className="circle">
                                <img src="arrowdown.svg" />
                            </span>
                            <span className="shadow"/>
                        </div>
                        <div className="detail">
                            To
                            <button className="from">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src="polygon.png" width="24" style={{ marginRight: "12px" }} />
                                    <span>Polygon (Matic)</span>
                                </div>
                                <FaChevronDown />
                            </button>
                        </div>
                        <div className="detail">
                            Choose asset
                            <button className="from">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src="apys.png" width="24" style={{ marginRight: "12px" }} />
                                    <span>APYS</span>
                                </div>
                                <FaChevronDown />
                            </button>
                        </div>
                        <button className="connect">Connect Wallet</button>
                    </div>
                </LandingItem>
                <LandingItem title={"Amount and address"} number={2} />
                <LandingItem title={"Confirmation"} number={3} />
                <LandingItem title={"Receive money"} number={4} />
            </div>
            <div className="bridgepage" style={{ display: page ? "" : "none" }}>
                <LandingItem title={"Input transaction id"} number={1} active>
                    <div className="main">
                        <div>Transaction ID</div>
                        <div style={{ fontSize: "14px" }}>Transaction ID of the Send transaction. <span style={{ textDecoration: "underline", cursor: "pointer" }}>Here is how to find it.</span></div>
                        <span className="input">
                            <input type="text" />
                        </span>
                        <button className="connect disabled">Connect Wallet</button>
                    </div>
                </LandingItem>
                <LandingItem title={"Receive money"} number={2} />
            </div>
            <div className="fixed">
                <img src="mark.png" width="90px" style={{ borderRadius: "50%", boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;" }} />
            </div>
        </div>
    );
}


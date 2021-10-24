import React, { useEffect, useRef, useState } from 'react';
import './style.scss';


export default function Landing({ children, title, number, active }) {
    return (
        <div className={active ? "itemactive" : "iteminactive"}>
            <div className="title">
                <div className="circlenumber">{number}</div>
                {title}
            </div>
            {children}
        </div>
    );
}


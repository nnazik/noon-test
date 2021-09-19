import React from 'react';
import Link from "next/link";

const NavButton = (props:any) => (
    <Link href={props.path}>
        <div className="NavButton">
            <div className="Icon">{props.icon}</div>
        </div>
    </Link>
);

export default NavButton;
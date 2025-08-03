import React from 'react';
import { Link } from "react-router";

export function RoutingButton(props: any) {

    return (
        <Link to={props.routeTo}>
            <button className={props.buttonClassName}>{props.buttonText}</button>
        </Link>
    );
}
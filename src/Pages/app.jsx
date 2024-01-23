import React from "react";
import Applayout from "../AppLayout/Applayout";
import { Outlet } from "react-router-dom";

export default function app(){
    return (
        <div>
            <Applayout>
                <Outlet/>
            </Applayout>
        </div>
    );
}
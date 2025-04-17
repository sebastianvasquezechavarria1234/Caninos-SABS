import React from "react";
import {Layout} from '../layout/Layout'
import { Outlet } from "react-router-dom";

export const Categorias = () => {
    return(
        <Layout>

            <Outlet />
        </Layout>
    )
}
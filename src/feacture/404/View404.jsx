import React from "react";
import {Layout} from '../landing/layout/Layout'
import { Link } from "react-router-dom";
export const View404 = () => {
    return(
        <Layout>
            <section className="max-w-[var(--max-w)] mx-auto text-center pt-[120px]">
                <h1 className="mb-[20px]">error 404</h1>
                <p className="mb-[20px]">La URL (dirección) especificada por el cliente no contiene un archivo que se pueda ver.</p>
                <Link className="btn bg-[var(--green)] text-white" to="/">Ir al inicio</Link>
            </section>
        </Layout>
    )
}
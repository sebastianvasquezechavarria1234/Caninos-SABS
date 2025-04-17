import { Route, Routes } from "react-router-dom"
import { Home } from "../feacture/landing/pages/Home"
import { QuienesSomos } from "../feacture/landing/pages/QuienesSomos"

import { Login } from "../feacture/landing/pages/Login"
import { Products } from "../feacture/landing/pages/Products"
import { Services } from "../feacture/landing/pages/Services"
import { Dashboard } from "../feacture/dashboard/pages/Dasboard"
import { DashboardUsers } from "../feacture/dashboard/pages/DashboardUsers"
import { DashboardRoles } from "../feacture/dashboard/pages/DashboardRoles"
import { DashboardCompania } from "../feacture/dashboard/pages/DashboardCompañia"
import { DashboardProducts } from "../feacture/dashboard/pages/DashboardProducts"
import { DashboardHome } from "../feacture/dashboard/pages/DasboardHome"
import { View404 } from "../feacture/404/View404"
import ProtedRouters from "./ProtedRouters"
import { DashboardLayout } from "../feacture/dashboard/layout/DashboardLayout"
import { Categorias } from "../feacture/landing/pages/Categorias"
import { Alimentos } from "../feacture/landing/pages/categorias/Alimentos"
import { Juguetes } from "../feacture/landing/pages/categorias/Juguetes"
import { Accesorios } from "../feacture/landing/pages/categorias/Accesorios"
import { Higiene } from "../feacture/landing/pages/categorias/Higiene"
import { DashboardCategorias } from "../feacture/dashboard/pages/DashboardCategorias"


export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quienes-somos" element={<QuienesSomos />} />
            <Route path="products" element={<Products />} />
            <Route path="services" element={<Services />} />
            {/* CATEGORIAS */}
            <Route path="categorias" element={<Categorias />}>
                <Route path="alimentos"  element={<Alimentos />}/>
                <Route path="juguetes"  element={<Juguetes />}/>
                <Route path="accesorios"  element={<Accesorios />}/>
                <Route path="higiene"  element={<Higiene />}/>
            </Route>
            <Route path="login" element={<Login />} />
            {/* DASHBOARD */}
            <Route path="dashboard" element={<ProtedRouters />}>
                <Route element={<DashboardLayout />}>
                    <Route path="home" element={<DashboardHome />} />
                    <Route path="users" element={<DashboardUsers />} />
                    <Route path="roles" element={<DashboardRoles />} />
                    <Route path="compañia" element={<DashboardCompania />} />
                    <Route path="products" element={<DashboardProducts />} />
                    <Route path="categorias" element={<DashboardCategorias />} />
                </Route>
            </Route>

            {/* ERROR 404 */}
            <Route path="*" element={<View404 />} />
        </Routes>
    )
}
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


export const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quienes-somos" element={<QuienesSomos />} />
            <Route path="products" element={<Products />} />
            <Route path="services" element={<Services />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="home" element={<DashboardHome />} />
                <Route path="users" element={<DashboardUsers />} />
                <Route path="roles" element={<DashboardRoles />} />
                <Route path="compañia" element={<DashboardCompania />} />
                <Route path="products" element={<DashboardProducts />} />
            </Route>
        </Routes>
    )
}
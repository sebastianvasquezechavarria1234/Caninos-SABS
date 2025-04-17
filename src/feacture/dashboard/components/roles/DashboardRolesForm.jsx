import React from "react";

export const DashboardRolesForm = () => {
    return (
        <form

            className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
        >
            <h2 className="mb-[20px] text-center">Roles</h2>


            {/* NOMBRE */}
            <label className="block mb top-[20px]">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
                <input
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    type="text"
                    name="name"
                    placeholder="por Ejemplo: Admin"
                    minLength={3}
                    required

                />
            </label>

            {/* NIT */}
            <label className="block mb top-[20px]">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Descripción:</p>
                <input
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    type="text"
                    name="nit"
                    placeholder="----------"
                    required

                />
            </label>




            {/* SUBMIT */}
            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value="Registrar Rol"
            />
        </form>

    )
}
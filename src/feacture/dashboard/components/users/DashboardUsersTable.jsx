"use client"

import axios from "axios"
import { useState } from "react"
import { IconCanino, IconDoc, IconUser, IconVerifyque } from "../../../../assets/icons/Icons"

export const DashboardUsersTable = ({ users, setUserToEdit, fetchUsers }) => {
	const [modalUser, setModalUser] = useState(null)

	const handleDelete = (id) => {
		if (confirm("Estas seguro de eliminar este usuario")) {
			axios.delete(`http://localhost:3030/users/${id}`)
				.then(() => {
					fetchUsers();
				})
				.catch(error => {
					console.error("Error al eliminar usuario:", error);
					alert("Error al eliminar el usuario.");
				});
		}
	}

	return (
		<section className="w-[75%]">
			<ul className="bg-white/20 grid gap-[5px] grid-cols-4 border-y border-dashed py-[10px]">
				<li><p className="italic underline pl-[20px] border-x border-dashed">Email:</p></li>
				<li><p className="italic underline pl-[20px] border-r border-dashed">Compañía:</p></li>
				<li><p className="italic underline pl-[20px] border-r border-dashed">Rol:</p></li>
				<li><p className="italic underline pl-[20px] border-r border-dashed">Acciones</p></li>
			</ul>

			{users.map((user, index) => (
				<ul key={user.id || index} className="grid gap-[5px] grid-cols-4 border-b border-dashed py-[10px]">
					<li>
						<p className="pl-[20px] border-x border-dashed">{user.email}</p>
					</li>
					<li>
						<p className="pl-[20px] border-r border-dashed">{user.company?.name || "Sin compañía"}</p>
					</li>
					<li>
						<p className="flex items-center gap-[5px] pl-[20px] border-r border-dashed">
							{/* PELUQUERO CANINO */}
							{user.role?.name === "Peluquero Canino" && 
								<span className="text-red-400 translate-y-[-3px]">
									<IconCanino />
								</span>
							}
							{/* VETERINARIO */}
							{user.role?.name === "Veterinario" &&
								<span className="translate-y-[-3px] text-[var(--purple)]">
									<IconDoc />
								</span>
							}
							{/* CLIENTE */}
							{user.role?.name === "Cliente" &&
								<span className="translate-y-[-3px]  text-[#c69693]">
									<IconUser />
								</span>
							}
							{/* ADMINISTRADOR */}
							{user.role?.name === "Administrador" && 
								<span className="translate-y-[-3px] text-blue-700">
									<IconVerifyque />
								</span>
							}
							{user.role?.name || "Sin rol"}
						</p>
					</li>
					<li>
						<p className="pl-[20px] border-r border-dashed flex gap-[10px]">
							<span onClick={() => setModalUser(user)} className="cursor-pointer pt-[1px] px-[7px] bg-green-200">Ver</span>
							<span onClick={() => setUserToEdit(user)} className="cursor-pointer pt-[1px] px-[7px] bg-blue-200">Editar</span>
							<span onClick={() => handleDelete(user.id)} className="cursor-pointer pt-[1px] px-[7px] bg-red-200">Eliminar</span>
						</p>
					</li>
				</ul>
			))}

			{modalUser && (
				<div className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
					<div className="bg-white p-5 rounded-[20px] shadow-lg w-[400px]">
						<h2 className="text-center mb-4">Detalles del Usuario</h2>

						<div className="flex flex-col gap-[10px]">
							<div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
								<p>Nombre: {modalUser.fullName}</p>
							</div>

							<div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
								<p>Email: {modalUser.email}</p>
							</div>
							<div className="overflow-hidden bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
								<p className="block pr-[16px]">Contraseña: {modalUser.password}</p>
							</div>

							<div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
								<p>Rol: {modalUser.role?.name}</p>
							</div>

							<div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
								<p>Compañía: {modalUser.company?.name}</p>
							</div>
							<button onClick={() => setModalUser(null)} className="mt-[15px] btn bg-[var(--green)] text-white w-full flex items-center justify-center cursor-pointer">
								Cerrar
							</button>

						</div>
					</div>
				</div>
			)}
		</section>
	);
}
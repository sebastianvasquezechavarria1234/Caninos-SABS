import React from "react";
import { Title } from "../Title";

export const NuestroEquipo = () => {
    return (
        <article id="nuestro-equipo" className="mt-[120px] pt-[20px] max-md:mt-[60px]">
            <Title title="Nuestro equipo" />
            <div className="flex justify-between w-full mb-[30px] max-lg:flex-col">
                <h2 className="max-w-[600px] mb-[10px] flex gap-[20px]">
                    Conozca al equipo que cuidad a tu amigo
                </h2>
                <p className="mb-[20px] max-w-[600px]">Como amantes de los animales, profesionales del cuidado canino y personas comprometidas con el bienestar animal, nuestras historias personales nos inspiran cada día. En BCaninos SABS, compartimos un profundo respeto por la vida, la empatía y la conexión entre humanos y perros.</p>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-4 gap-[20px] max-md:grid-cols-2 max-md:gap-[10px]">
                {/* 1 */}
                <article>
                    <picture className="p-[10px] bg-[#b961cd] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09bab_deann.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Marcela roldan</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 2 */}
                <article>
                    <picture className="p-[10px] bg-[#ff9bc8] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09bbb_marcella.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Alejandra veles</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 3 */}
                <article>
                    <picture className="p-[10px] bg-[var(--green)] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09bcb_1594772757607.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Jadil lopez</h5>
                    <p className="italic underline">Veterinario</p>
                </article>
                {/* 4 */}
                <article>
                    <picture className="p-[10px] bg-[#c9c19b] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/5e823a3aa0bb58451e59dbfb/624b150c689b8939608f7e48_IMG_5402.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Manuel</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 5 */}
                <article>
                    <picture className="p-[10px] bg-[#c69693] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b3c_felix.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Marcela roldan</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 6 */}
                <article>
                    <picture className="p-[10px] bg-[#b961cd;] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b1b_headshot.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. martha</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 7 */}
                <article>
                    <picture className="p-[10px] bg-[#c9c19b;] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/650cd6967d92dcdb1db32cff_tww-p-500.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Julian</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 8 */}
                <article>
                    <picture className="p-[10px] bg-[var(--green)] block h-[20vw] overflow-hidden max-md:h-[60vw]">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b81_jamie-p-500.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Julian</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
            </div>
            

        </article>
    )
}
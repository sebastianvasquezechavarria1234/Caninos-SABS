import React from "react";

export const NuestroEquipo = () => {
    return (
        <article className="mt-[120px] border-t border-dashed pt-[20px]">
            <h2 className="mb-[10px] flex gap-[20px]">
                Conozca al equipo que cuidad a tu amigo
            </h2>
            <p className="mb-[20px]">Como amantes de los animales, profesionales del cuidado canino y personas comprometidas con el bienestar animal, nuestras historias personales nos inspiran cada día. En BCaninos SABS, compartimos un profundo respeto por la vida, la empatía y la conexión entre humanos y perros.</p>

            {/* GRID */}
            <div className="grid grid-cols-3 gap-[20px]">
                {/* 1 */}
                <article>
                    <picture className="p-[10px] bg-[#b961cd] block h-[350px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09bab_deann.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Marcela roldan</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 2 */}
                <article>
                    <picture className="p-[10px] bg-[#ff9bc8] block h-[350px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09bbb_marcella.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Alejandra veles</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 3 */}
                <article>
                    <picture className="p-[10px] bg-[var(--green)] block h-[350px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09bcb_1594772757607.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Jadil lopez</h5>
                    <p className="italic underline">Veterinario</p>
                </article>
                {/* 4 */}
                <article>
                    <picture className="p-[10px] bg-[#c9c19b] block h-[350px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/5e823a3aa0bb58451e59dbfb/624b150c689b8939608f7e48_IMG_5402.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Manuel</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 5 */}
                <article>
                    <picture className="p-[10px] bg-[#c69693] block h-[350px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b3c_felix.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. Marcela roldan</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
                {/* 6 */}
                <article>
                    <picture className="p-[10px] bg-[#b961cd;] block h-[350px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b1b_headshot.jpg" alt="" />
                    </picture>
                    <h5 className="my-[10px]">Dr. martha</h5>
                    <p className="italic underline">Veterinaria</p>
                </article>
            </div>
            

        </article>
    )
}
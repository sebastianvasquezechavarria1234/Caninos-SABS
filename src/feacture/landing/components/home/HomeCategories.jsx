import React from "react";
import { Link } from "react-router-dom";
import { Title } from '../../components/Title'
export const HomeCategories = () => {
    return (
        <section className="pt-[120px] max-w-[var(--max-w)] mx-auto px-[10px]">
            <Title title="productos/categorías" />
            {/* GRID */}
            <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
                {/* TEXT */}
                <div className="">
                    <h2 className="mb-[20px]">¡Encuentra todo lo que tu perro necesita en nuestras categorías especializadas!</h2>
                    <p>En nuestra tienda online, te ofrecemos una amplia variedad de categorías diseñadas para satisfacer todas las necesidades de tu mascota. Ya sea que busques comida, accesorios, juguetes o productos de cuidado, tenemos lo que tu canino necesita para estar feliz y saludable.</p>

                    {/* FLEX */}
                    <div className="flex gap-[10px] mt-[50px]">
                        <p className="bg-[#dacc84] pt-[4px] px-[12px] rounded-[10px]">19% mas limpio</p>
                        <p className="bg-[#d58ee6] pt-[4px] px-[12px] rounded-[10px]">Comida premium 100% nutritiva</p>
                        <p className="bg-[#508883] pt-[4px] px-[12px] rounded-[10px] text-white">Accesorios duraderos</p>

                    </div>
                </div>

                {/* CATEGORIES */}
                <div className="flex flex-col gap-[10px]">
                    {/* 1 CARD */}
                    <Link to="/categorias/alimentos" className="flex justify-between gap-[20px] p-[15px] rounded-[17px] bg-white shadow-md border border-black/10 ">
                        <div className="flex gap-[20px]">
                            {/* PICTURE */}
                            <picture className="rounded-[16px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[#dacc84]">
                                <img
                                    className="w-[50%]"
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/646201e94d30162b2569b6a7_moving-circles-animation.svg"
                                    alt="" />
                            </picture>
                            {/* TEXT */}
                            <div className="w-[65%]">
                                <h5>Alimentos</h5>
                                <p className="line-clamp-1">Comida seca y húmeda para perros</p>
                            </div>


                        </div>
                        <img
                            className="w-[30px]"
                            src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a2a_arrow-dark-right.svg"
                            alt="" />
                    </Link>
                    {/* 2 CARD */}
                    <Link to="/categorias/juguetes" className="flex gap-[20px] p-[15px] rounded-[17px] bg-white shadow-md border border-black/10 justify-between">
                        <div className="flex gap-[10px]">
                            {/* PICTURE */}
                            <picture className="rounded-[16px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[var(--green)]">
                                <img
                                    className="w-[50%]"
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6531c474f2b3eec77bc54773_svg.svg"
                                    alt="" />
                            </picture>
                            {/* TEXT */}
                            <div className="w-[65%]">
                                <h5>Juguetes</h5>
                                <p className="line-clamp-1">Juguetes interactivos y resistentes</p>
                            </div>

                        </div>
                        <img
                            className="w-[30px]"
                            src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a2a_arrow-dark-right.svg"
                            alt="" />
                    </Link>
                    {/* 3 CARD */}
                    <Link to="/categorias/accesorios" className="flex gap-[20px] p-[15px] rounded-[17px] bg-white shadow-md border border-black/10 justify-between">
                        <div className="flex gap-[10px]">
                            {/* PICTURE */}
                            <picture className="rounded-[16px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[#96c9e9]">
                                <img
                                    className="w-[50%]"
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462231c11bbcbfdd7d1e492_team.svg"
                                    alt="" />
                            </picture>
                            {/* TEXT */}
                            <div className="w-[65%]">
                                <h5>Accesorios</h5>
                                <p className="line-clamp-1">Collares, correas y más</p>
                            </div>

                        </div>
                        <img
                            className="w-[30px]"
                            src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a2a_arrow-dark-right.svg"
                            alt="" />
                    </Link>
                    {/* 4 CARD */}
                    <Link to="/categorias/higiene" className="flex gap-[20px] p-[15px] rounded-[17px] bg-white shadow-md border border-black/10 justify-between">
                        <div className="flex gap-[10px]">
                            {/* PICTURE */}
                            <picture className="rounded-[16px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[#c69693]">
                                <img
                                    className="w-[50%]"
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462230cf8fe494f03fdccfc_mission.svg"
                                    alt="" />
                            </picture>
                            {/* TEXT */}
                            <div className="w-[65%]">
                                <h5>Higiene</h5>
                                <p className="line-clamp-1">Shampoo, cepillos, limpieza</p>
                            </div>

                        </div>
                        <img
                            className="w-[30px]"
                            src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a2a_arrow-dark-right.svg"
                            alt="" />
                    </Link>
                </div>
            </div>


            {/* BOTTOM */}
            <div className="mt-[60px]">
                {/* ARTICLE 1 */}
                <article className="border-b mb-[50px] pb-[20px] border-dashed flex justify-between items-start gap-[20px] max-lg:flex-col">
                    {/* LEFT */}
                    <div className="w-[55%] max-lg:w-full">
                        {/* TOP */}
                        <div className="flex justify-between gap-[10px] items-center ">
                            {/* TEXT */}
                            <div className="flex gap-[10px] items-center">
                                <img
                                    className="w-[60px] max-md:w-[30px]"
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6531c51d4d0afe70af13510b_Credentialing.svg"
                                    alt="" />
                                <h1>Problema</h1>
                            </div>

                            {/* LINE */}
                            <span className="w-[250px] h-[1px] bg-[currentColor] block max-lg:w-[30%]"></span>
                        </div>

                        {/* FLEX PICTURE */}
                        <div className="relative flex">
                            {/* PERSON PICTURE */}
                            <picture className="mt-[30px] w-[200px] h-[200px] flex justify-center items-center bg-[#c69693] rounded-full overflow-hidden z-10">
                                <img
                                    className="h-full"
                                    src="https://www.dirtydogbeautyclub.com/cdn/shop/files/Group_206_266x.png?v=1691094558"
                                    alt="" />
                            </picture>
                            {/* PERSON PICTURE */}
                            <picture className="absolute top-0 left-[20%] mt-[30px] w-[200px] h-[200px] flex justify-center items-center bg-[#508883] rounded-full overflow-hidden">
                                <img
                                    className="h-full"
                                    src="https://www.dirtydogbeautyclub.com/cdn/shop/files/Jessica_2_266x.png?v=1691094518"
                                    alt="" />
                            </picture>
                        </div>
                    </div>

                    <div className="w-[45%] max-lg:w-full">
                        <p className="mb-[20px]">Muchos perros sufren de problemas de piel seca, picazón y alergias, especialmente durante los cambios de estación. Esto puede causarles incomodidad, ansiedad y hasta lesiones en la piel debido al rascado constante.</p>
                        <p className="mb-[10px]">Causas comunes:</p>
                        <p className="mb-[10px]">Clima seco: El aire frío y seco puede afectar la piel de tu perro.</p>
                        <p className="mb-[10px]">Alergias: Polvo, polen o ciertos ingredientes en alimentos pueden causar reacciones alérgicas.</p>
                        <p className="mb-[10px]">Productos de cuidado inadecuados: Usar champús o productos no recomendados para la piel sensible de los perros.

                        </p>

                    </div>

                </article>
                {/* ARTICLE 2 */}
                <article className="border-b mb-[50px] pb-[20px] border-dashed flex justify-between items-start gap-[20px] max-lg:flex-col">
                    {/* LEFT */}
                    <div className="w-[55%] max-lg:w-full">
                        {/* TOP */}
                        <div className="flex justify-between gap-[10px] items-center ">
                            {/* TEXT */}
                            <div className="flex gap-[10px] items-center">
                                <img
                                    className="w-[60px] max-md:w-[30px]"
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6540df5aae4147884770fce5_Mission.svg"
                                    alt="" />
                                <h1>Solución</h1>
                            </div>

                            {/* LINE */}
                            <span className="w-[250px] h-[1px] bg-[currentColor] block max-lg:w-[30%]"></span>
                        </div>

                        {/* FLEX PICTURE */}
                        <div className="relative flex">
                            {/* PERSON PICTURE */}
                            <picture className="mt-[30px] w-[200px] h-[200px] flex justify-center items-center bg-[#dacc84] rounded-full overflow-hidden z-30">
                                <img
                                    className="h-full"
                                    src="https://www.dirtydogbeautyclub.com/cdn/shop/files/Ferguson_2_266x.png?v=1691094574"
                                    alt="" />
                            </picture>
                            {/* PERSON PICTURE */}
                            <picture className="absolute top-0 left-[20%] mt-[30px] w-[200px] h-[200px] flex justify-center items-center bg-[#d58ee6] rounded-full overflow-hidden z-20">
                                <img
                                    className="h-full"
                                    src="https://www.dirtydogbeautyclub.com/cdn/shop/files/nate_1_266x.png?v=1691094546"
                                    alt="" />
                            </picture>
                            {/* PERSON PICTURE */}
                            <picture className="absolute top-0 left-[40%] mt-[30px] w-[200px] h-[200px] flex justify-center items-center bg-[#c69693] rounded-full overflow-hidden">
                                <img
                                    className="h-full"
                                    src="https://www.dirtydogbeautyclub.com/cdn/shop/files/natalie-and-dog_2_266x.png?v=1691094534"
                                    alt="" />
                            </picture>
                        </div>
                    </div>

                    <div className="w-[45%] max-lg:w-full">
                        <p className="mb-[10px]">1. Champú Hidratante para Perros Nuestro champú especialmente formulado con ingredientes naturales como la avena y aloe vera ayuda a restaurar la humedad y calma la piel irritada. Ideal para perros con piel sensible o propensos a alergias.</p>
                        <p className="mb-[10px]">2. Aceite de Coco Natural para Perros El aceite de coco es conocido por sus propiedades hidratantes y antioxidantes. Ayuda a aliviar la piel seca, reduciendo la picazón y mejorando la salud general de la piel de tu mascota. Aplícalo directamente en las zonas afectadas para un alivio inmediato.</p>
                        <p className="mb-[10px]">3. Suplementos para la Salud de la Piel Ofrecemos suplementos ricos en ácidos grasos Omega-3, que son esenciales para mantener la piel de tu perro saludable y libre de irritaciones. Estos suplementos apoyan la regeneración celular y ayudan a mejorar la apariencia del pelaje.</p>
                    </div>

                </article>
             

            </div>
        </section>
    )
}
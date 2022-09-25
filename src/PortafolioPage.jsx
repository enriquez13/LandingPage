
export const Portafolio = ({nombre, descripcion, imagen, categoria}) => {
    
    return (
        


<div className="justify-self-center mb-5 md:mx-5 mt-2 w-5/6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#3B758C] dark:border-gray-700">


    <img className="md:mx-auto pt-2 md:pt-10 px-2 w-full md:max-w-[250px] rounded-t-lg " src={imagen} alt={imagen} />


<div className=" text-center">
    
        <h5 className="pt-2 text-xs md:text-xl font-bold tracking-tight text-[#192E40]">{nombre}</h5>
    
    <p className="md:mb-3 text-xs md:text-xl font-normal text-[#C4EAF2]">{descripcion}</p>
    <p className=" mb-2 md:mb-3 text-xs md:text-xl font-normal text-[#C4EAF2]">{categoria}</p>
</div>
</div>

    )
}

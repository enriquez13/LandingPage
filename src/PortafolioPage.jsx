
export const Portafolio = ({nombre, descripcion, imagen}) => {
    
    return (
        


<div className="justify-self-center mb-5 md:mx-5 mt-2 w-5/6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#3B758C] dark:border-gray-700">

<a href="#">
    <img className="md:mx-auto pt-2 md:pt-10 px-2 w-full md:max-w-[250px] rounded-t-lg " src={imagen} alt={imagen} />
</a>

<div className=" text-center">
    <a >
        <h5 className="pt-2 text-xs md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
    </a>
    <p className="md:mb-3 text-xs md:text-xl font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
    <p className=" mb-2 md:mb-3 text-xs md:text-xl font-normal text-gray-700 dark:text-gray-400">{imagen}</p>
</div>
</div>

    )
}

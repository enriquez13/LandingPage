export const Experiencia = ({titulo, institucion, imagen, link}) => {
    
    return (

        <div className="justify-self-center mb-5 md:mx-5 mt-2 w-5/6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#326A8C] dark:border-gray-700">

            <a href={link}>
                <img className="md:mx-auto pt-2 md:pt-10 px-2 w-full md:max-w-[250px] rounded-t-lg " src={imagen} alt={imagen} />
            </a>

            <div className=" text-center">
                <a href={link}>
                    <h5 className="pt-2 text-xs md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                </a>
                <p className=" mb-2 md:mb-3 text-xs md:text-xl font-normal text-gray-700 dark:text-gray-400">{institucion}</p>
            </div>
        </div>
    )
}
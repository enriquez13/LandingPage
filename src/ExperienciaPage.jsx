export const Experiencia = ({titulo, anio, institucion, imagen}) => {
    
    return (
    
<div className="justify-self-center mb-5 md:mx-5 mt-2 w-2/3  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#192E40] dark:border-gray-700">
    
    <a  href="#">
        <img  className="md:mx-auto md:block w-full md:max-w-[250px] rounded-t-lg " src={imagen} alt={imagen}/>
    </a>
   
 
    <div  className=" text-center">
        <a >
            <h5  className="pt-2 text-xs md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
        </a>
        <p  className="md:mb-3 text-xs md:text-xl font-normal text-gray-700 dark:text-gray-400">{anio}</p>
        <p  className=" mb-2 md:mb-3 text-xs md:text-xl font-normal text-gray-700 dark:text-gray-400">{institucion}</p>
    </div>
</div>

    )
}
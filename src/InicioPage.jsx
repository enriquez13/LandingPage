import foto from '/fotoalejo.png'
export const Inicio = () => {
    return (
        <div id="inicio" className="flex items-center pt-28 md:py-[8rem] px-3 justify-cener md:h-screen" >
            <div className="m-auto flex items-center h-[250px] w-full md:w-3/5 md:h-3/5 border-cyan-900 border rounded-2xl 
            bg-[#192E40] text-center">
                <img className=' h-[150px] md:ml-20 md:h-2/3  pl-2 rounded-xl' src={foto} />
                
                <div className=' w-full'>
                <h2 className="w-full text-xl md:text-4xl py-4 md:py-10 text-[#7AACBF]">Bienvenidos</h2>
                <span className="text-md md:text-3xl text-[#7AACBF]">Hola!</span>
                <span className="text-md md:text-3xl text-cyan-100"> Soy Alejandro Enríquez</span>
                <h3 className="py-2 md:py-5 text-xs md:text-xl text-cyan-100">Ingeniero físico y programador</h3>
                
                <p className='w-full  justify-center mt-3'>
                <a className="bg-[#7AACBF] pt-1 pb-1 md:pt-5 md:pb-2 px-4 hover:bg-[#326A8C] border cursor-pointer rounded-lg" href="https://github.com/enriquez13">
                    <span className='text-[17px] md:text-[35px]'>GitHub</span>
                </a>
                </p>
                </div>
            </div>
        </div>
    )
}
import foto from '/fotoalejo.png'
export const Inicio = () => {
    return (
        <div id="inicio" className="flex items-center py-[8rem] px-3 justify-cener md:h-screen" >
            <div className="m-auto flex items-center h-[250px] w-full md:w-3/5 md:h-3/5 border-cyan-900 border rounded-2xl 
            bg-[#192E40] text-center">
                <img className=' h-[120px] md:ml-20 md:h-2/3  pl-2 rounded-xl' src={foto} />
                
                <div className=' w-full'>
                <h2 className="w-full text-xl md:text-4xl py-4 md:py-10 text-[#7AACBF]">Bienvenidos</h2>
                <span className="text-xs md:text-3xl text-[#7AACBF]">Hola!</span>
                <span className="text-xs md:text-3xl text-cyan-100"> Soy Alejandro Enríquez</span>
                <h3 className="py-2 md:py-5 text-xs md:text-xl text-cyan-100">Ingeniero físico y programador</h3>
                <a className="flex justify-center pt-3 text-[23px] md:text-5xl  cursor-pointer" href="https://github.com/enriquez13">
                    <span className='text-[20px] md:text-[35px]'>GitHub</span><ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}
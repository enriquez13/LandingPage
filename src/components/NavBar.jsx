import { useState } from "react"
import { Link } from "react-scroll"
export const Header = () => {
    
    let [open,setOpen]=useState(false);

    return (
        <>      
            <div className="shadown-md w-full fixed top-0 left-0">
                <div className='md:flex items-center justify-center bg-[#192E40] py-4 md:px-10 px-7'>
                    <div className="text-2xl left-0 flex items-center text-gray-400">
                        Alejandro Enríquez 
                    </div>   
                    <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-4 text-[#7AACBF] cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#326A8C] md:bg-[#192E40]
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
                    ease-in ${open ? 'top-16 opacity-100':'top-[-490px]'} md:opacity-100 `}>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                            <Link to="inicio" className="text-[#C4EAF2] hover:text-gray-400 duration-500">inicio</Link>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                        <Link to="perfil" className="text-[#C4EAF2] hover:text-gray-400 duration-500">perfil</Link>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                        <Link to="estudios" className="text-[#C4EAF2] hover:text-gray-400 duration-500">estudios</Link>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                        <Link to="experiencia" className="text-[#C4EAF2] hover:text-gray-400 duration-500">experiencia</Link>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                        <Link to="portafolio" className="text-[#C4EAF2] hover:text-gray-400 duration-500">portafolio</Link>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                        <Link to="contacto" className="text-[#C4EAF2] hover:text-gray-400 duration-500">contacto</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
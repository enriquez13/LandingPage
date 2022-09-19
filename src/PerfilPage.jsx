export const Perfil = () => {
    return (
        <div id="perfil" className="w-full flex md:h-screen">
            <div className="min-w-[120px] md:w-[600px] h-screen bg-[#192E40] text-center">
                <h2 className="text-center pt-56 pb-10 text-sm md:text-5xl tracking-wider  text-[#7AACBF]">Perfil</h2>
                <h2 className="text-center textsm md:text-5xl tracking-wider text-[#7AACBF]">profesonal</h2>
            </div>
            <div className="flex items-center text-center">
                <p className="md:text-justify text-sm md:text-4xl tracking-wider px-14 text-blue-200">Cuento con habilidades en programación, tengo conocimientos 
                en: <br/>
                <p className="md:text-left pt-5">
                • HTML <br/>
                • CSS <br/>
                • Bootstrap <br/>
                • Tailwind <br/>
                • php <br/>
                • MySql <br/>
                • JavaScript <br/>
                • React <br/></p>
                    
                    <p className="md:text-justify pt-10">Por otro lado soy profesional en el área de ingeniería y en ciencias exactas. 
                    He adquirido habilidades en investigación (Física de partículas)
<br/></p>
                    
                </p>
            </div>

        </div>
    )
}
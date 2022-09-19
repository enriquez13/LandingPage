export const Contacto = () => {
    return (
        <div id="contacto" className='pb-5  md:px-20 pt-10 justify-center   md:h-screen' >
            <h2 className='md:text-2xl mb-5 text-center text-blue-100'>Contactos</h2>

            <section  className="mx-5 md:mx-96 border border-[#192E40] rounded-lg">
                <div  className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <form action="#"  className="space-y-8">
                        <div>
                            <label for="nombre"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                            <input type="text" id="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#C4EAF2] dark:border-gray-600 dark:placeholder-[#192E40] dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="Nombre" required />
                        </div>
                        <div>
                            <label for="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="email" id="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#C4EAF2] dark:border-gray-600 dark:placeholder-[#192E40] dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="Correo eletrónico" required />
                        </div>
                        <div>
                            <label for="subject"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teléfono</label>
                            <input type="text" id="subject"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#C4EAF2] dark:border-gray-600 dark:placeholder-[#192E40] dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="Número de teléfono" required />
                        </div>
                        <div  className="sm:col-span-2">
                            <label for="message"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mensage</label>
                            <textarea id="message" rows="6"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#C4EAF2] dark:border-gray-600 dark:placeholder-[#192E40] dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            placeholder="Escribe tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="bg-[#192E40] py-3 px-5 text-sm font-medium text-center  text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar mensaje</button>
                    </form>
                </div>
            </section>
        </div>
)
}
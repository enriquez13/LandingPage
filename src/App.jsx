import { Header } from './components/NavBar';
import { Portafolio } from './PortafolioPage';
import { portafolios } from './data/Potafolio'
import { Inicio } from './InicioPage';
import { Perfil } from './PerfilPage';
import { Estudios } from './EstudiosPage';
import {estudios} from './data/Estudios'
import { Experiencia } from './ExperienciaPage';
import {experiencias} from './data/experiencia'
import {Contacto} from './ContactoPage'
import {Footer} from './components/Footer'


function App() {

  return (
    <div className="App bg-gradient-to-b from-[#192E40] to-[#7AACBF]">

      <Header />
      <Inicio id="inicio" />
      <Perfil />

      <div id="estudios" className='pb-5  md:px-20 pt-10 justify-center    md:h-screen'>
        <h2 className='md:text-3xl mb-5 pt-10 text-center tracking-wider text-blue-100'>Estudios</h2>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          {estudios.map((estudio) => (
            <Estudios
              key={estudio.id}
              imagen={estudio.imagen}
              titulo={estudio.titulo}
              descripcion={estudio.anio}
              institucion={estudio.institucion}
            />
          ))}
        </div>
      </div>

      <div id="experiencia" className='pb-5  md:px-20 pt-10 justify-center  md:h-screen'>
        <h2 className='md:text-3xl mb-5 pt-10 text-center tracking-wider text-blue-100'>Experiencia</h2>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          {experiencias.map((experiencia) => (
            <Experiencia
              imagen={experiencia.imagen}
              titulo={experiencia.titulo}
              institucion={experiencia.institucion}
              link={experiencia.link}
            />
          ))}
        </div>
      </div>

      <div id="portafolio" className='pb-5  md:px-20 pt-10 justify-center  '>
      <h2 className='md:text-3xl mb-5 pt-10 text-center tracking-wider text-blue-100'>Estudios</h2>
        <div className='grid grid-cols-2 md:grid-cols-3'>
        {portafolios.map((portafolio) => (
          <Portafolio  
          key={portafolio.id}
            imagen={portafolio.imagen}
            nombre={portafolio.nombre}
            descripcion={portafolio.descripcion}
            
          />
        ))}
        </div>
      </div>
      <Contacto />
      <Footer />

    </div>
  )
}

export default App

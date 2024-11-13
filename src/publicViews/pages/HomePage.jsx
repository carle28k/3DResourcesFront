import RendersCombined from '../../assets/HomePage/RendersCombined.png'

import './HomePage.css'



export const HomePage = () => {
  return (
    <>
      <div className="gridHome">
        <div className='gridText'>
          <h1>Biblioteca de Recursos 3D y VFX</h1>
          <p>Explora programas, hardware ..... para producción 3D y VFX.</p>
        </div>
        <div className='gridImage'>
          <img className="imagen" src={RendersCombined} alt="Logo" />
        </div>
        
      </div>
    </>
      )
}

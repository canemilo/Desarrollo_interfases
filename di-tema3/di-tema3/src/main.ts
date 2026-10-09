import './style.css'
import './topics/01-tipos-basicos.ts'
import './topics/di32.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="kawasaki-container" style="background-color: #000000; color: #39ff14; min-height: 100vh; padding: 40px; font-family: monospace;">
    <h1 style="color: #39ff14; font-size: 2.5rem; text-transform: uppercase;">¡Hola Mundo!</h1>
    <p style="font-size: 1.2rem;">Módulo: Desarrollo de Interfaces</p>
    <hr style="border-color: #39ff14; margin: 20px 0;">
    <p><strong>Alumno:</strong> Daniel Garrido Espartal</p>
    <p><strong>T 3.1 Proyecto TS</strong></p>
    
    <div style="display: flex; justify-content: center; margin-top: 30px;">
      <img src="/image.png" alt="Mi imagen" style="max-width: 300px; height: auto; border: 2px solid #39ff14;">
    </div>
    <div style="display: flex; justify-content: center; margin-top: 30px;">
      <img src="/imagen3.png" alt="Mi imagen" style="max-width: 300px; height: auto; border: 2px solid #39ff14;">
    </div>
  </div>
`
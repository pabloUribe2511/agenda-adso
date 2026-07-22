export default function App() {
const fecha = new Date().toLocaleDateString();
return (
  <main>
    <h1>Hola SENA</h1>
    <p>Fecha y hora Actual: {fecha}</p>
    <p>Soy un principiante y quiero aprender React.</p>
  </main>
)
}
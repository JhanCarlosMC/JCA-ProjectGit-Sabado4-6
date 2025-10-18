import Header from './components/Header'
import Saludo from './components/Saludo'
import styles from './App.module.css'

function App() {

  return (
    <> {/*Fragment*/}
        <Header />

        <h2 className={styles.title}>Saludos</h2>
        <main className={styles['content-main']}>
            <Saludo nombre="Jhan" edad={24} disponibilidad="SI"/>
            <Saludo nombre="Victor" edad={20}/>
            <Saludo nombre="Nicolas" edad={20} disponibilidad="NO"/>
 
        </main>
    </>
  )
}

export default App
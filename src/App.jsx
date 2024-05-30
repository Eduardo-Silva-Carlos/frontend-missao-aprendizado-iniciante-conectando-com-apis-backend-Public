import './App.css'
import Card from './components/Card/Card'

function App() {
  const Java = {
    name: 'Java',
    imagem: 'https://salvatore.academy/devmon/1_java.png',
    evoluiPara: 'kotlin'
  }
  const Kotlin = {
    name: 'Kotlin',
    imagem: 'https://salvatore.academy/devmon/2_kotlin.png',
    evoluiPara: 'Android'
  }
  const Android = {
    name: 'Android',
    imagem: 'https://salvatore.academy/devmon/3_android.png',
  }
  const C = {
    name: 'C',
    imagem: 'https://salvatore.academy/devmon/4_c.png',
    evoluiPara: 'C++'
  }
  const Cplusplus = {
    name: 'C++',
    imagem: 'https://salvatore.academy/devmon/5_cpp.png',
    evoluiPara: 'C#'
  }
  


  const devmons = [Java, Kotlin, Android, C, Cplusplus]

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.name} item={devmon} />
        })}
      </div>
    </>
  )
}

export default App

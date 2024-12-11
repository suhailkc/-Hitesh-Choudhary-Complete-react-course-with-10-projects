import './App.css'
import Card from './components/Card'

function App() {

  let newArr = [1,2,3,4,5]
  let newObj = {
    name: 'aaa',
    age: 30,
    place: 'India'
  }

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md mb-4">Vite with Tailwind</h1>
      <Card username ='suhail' post='admin' details="I'm the admin here"/>
      <Card username='Json' post='unknown' details='This is unknown person'/>
      <Card username='Aydi' post='son' details='He is my lovely son' myArr={newArr} myObj={newObj}/>
    </>
  )
}

export default App

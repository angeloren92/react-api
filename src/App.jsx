import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import { useEffect, useState } from 'react'

function App() {

  const apiUrl = 'https://lanciweb.github.io/demo/api/actresses/'
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setLists(data)
        console.log(data)
      })
  }, [])


  return (
    <>
      <AppHeader />
      <AppMain
        lists={lists}
      />
      <AppFooter />
    </>
  )
}

export default App

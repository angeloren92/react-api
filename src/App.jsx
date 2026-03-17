import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {

  const apiUrl = 'https://lanciweb.github.io/demo/api/actors/'

  return (
    <>
      <AppHeader />
      <AppMain
        apiUrl={apiUrl}
      />
      <AppFooter />
    </>
  )
}

export default App

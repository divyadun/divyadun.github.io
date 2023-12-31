import './App.css'
import ExampleQuery from './components/ExampleQuery'
import {useBearStore} from './store'
import AppProvider from './AddProviders'
import SimpleInterest from './components/SimpleInterest'
import TabContainer from './components/Tabs'
import CompoundInterest from './components/CompoundInterest'


function App() {
  const {bears, increasePopulation} = useBearStore()

  return (
    <>
    <AppProvider>
      <TabContainer 
        tab1={<SimpleInterest/>}
        tab2={<CompoundInterest/>}
        tab3={<ExampleQuery/>}
      />
    </AppProvider>
    </>
  )
}

export default App

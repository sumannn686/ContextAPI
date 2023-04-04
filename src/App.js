import React,{useState, createContext} from 'react'
import CompA from './Components/CompA'
import Header from './Components/Header'


const AppStore= createContext()

const App = () => {
  const [data,setData]= useState("Suman")
  const details={
    price:300,
    Model:"Iphone x"
  }
  return (
   
   <>
       <AppStore.Provider value={{data, details}} >
      <Header />
      <CompA data={data} />
      </ AppStore.Provider >
      </>
 
  )
}

export default App
export {AppStore}
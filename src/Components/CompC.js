import React,{useContext} from 'react'
import { AppStore } from '../App'



const CompC = () => {
    const appData = useContext(AppStore)
  return (
    <div>
        {appData.data}
        {appData.details.Model}
    </div>
  )
}

export default CompC
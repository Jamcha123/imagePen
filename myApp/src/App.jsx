import { useState } from 'react'
import {withDevCycleProvider, useDevCycleClient, useIsDevCycleInitialized, useVariableValue} from '@devcycle/react-client-sdk'
import './App.css'

function App(){
  const dev = useDevCycleClient(); 
  if(!dev){
    return (
      <div className="flex flex-col align-middle justify-center text-center w-[100%] h-[100%] m-auto p-[0] fixed ">
        <h1 className="text-3xl text-white">loading, please wait...</h1>
      </div>
    )
  }
}
export default withDevCycleProvider({sdkKey: "", user: {user_id: "Jamcha123", isAnonymous: true}})
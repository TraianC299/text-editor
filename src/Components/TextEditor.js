import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useState } from 'react'




const TextEditor = () => {
    const [selectedModes, setSelectedModes] = React.useState([])


  return (
      <div className="w-1/2 overflow-hidden shadow-xl m-auto mt-10 portrait:w-full portrait:mt-0">
    <div className='flex bg-gray-100 gap-2'>
        <Button setSelectedModes={setSelectedModes} selectedModes={ selectedModes} dataEelement={"bold"} icon={faBold}></Button>
        <Button setSelectedModes={setSelectedModes} selectedModes={ selectedModes} dataEelement={"italic"} icon={faItalic}></Button>
        <Button setSelectedModes={setSelectedModes} selectedModes={ selectedModes} dataEelement={"underline"} icon={faUnderline}></Button>
       
    </div>
    <div contentEditable={true} className="min-h-20 p-2 :active:bg-gray-500">

    </div>
    </div>

  )
}

export default TextEditor



const Button = ({icon, dataEelement, setSelectedModes, selectedModes}) => {

    const selectMode = useCallback(
      () => {
        const state = document.queryCommandState(dataEelement);

        if(!state){
            setSelectedModes(previous=>[...previous,dataEelement])
        }else{
            setSelectedModes(previous=>previous.filter(el=>el!==dataEelement))
        }
        document.execCommand(dataEelement)

      },
      [selectedModes],
    )
    
    return (
        <button onClick={(e)=>selectMode()} type="button" dataElement={dataEelement} className={`btn rounded-md flex justify-center items-center p-4 h-10 w-10 ${selectedModes.includes(dataEelement)?"bg-gray-500":""}`}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </button>
    )
}
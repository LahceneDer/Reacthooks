import React, {useState} from 'react'

const UseStateComponent = () => {
    const [arr, setArr] = useState<number[]>([])
    const [name, setName] = useState<string | null>(null)
    const [toggleName, setToggleName] = useState<boolean>(true)

    function nameToggle(event:any){
            setToggleName(!toggleName)

    }
    return (
        <div>
            <button onClick={() => setArr([...arr, arr.length + 1])} >
                Add to Array
            </button>
            <br/>
            {/* {JSON.stringify(arr)} */}
            <span> [ {arr.map(a => a + ",")} ]</span>
            <hr/>
            <button onDoubleClick={nameToggle} onClick={() => setName('lahcene') }>
                Set Name 
            </button>
            (set name with one click - toggle name with double click)
            <br/>
            {toggleName && <span>{name}</span>}
        </div>
    )
}

export default UseStateComponent

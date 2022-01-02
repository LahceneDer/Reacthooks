import React,  {useState, useContext} from 'react'
import { context, UserState } from './store'

const UseContextComponent = () => {
    const [user, setUser] = useState<UserState>({
        first: 'lahcene',
        last: 'dergham'
    })
    return (
       <context.Provider value={user} >
           <ConsumerComponent />
           <button onClick={() => setUser({first:"mohamed", last:"soudani"})} > change context</button>
       </context.Provider>
    )
}

function ConsumerComponent() {
    const user = useContext(context)

    return (
        <div>
            <div>First: {user.first} </div>
            <div>Last: {user.last} </div>
        </div>
    )
}

export default UseContextComponent

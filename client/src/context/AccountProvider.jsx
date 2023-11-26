import { createContext,useState, useRef, useEffect} from "react";

import {io} from 'socket.io-client'

export const AccountContext = createContext(null);

const AccountProvider = ({children})=>{

    const [account,setAccount]=useState();
    const [person,setPerson] = useState({});
    const [activeusers,setActiveUsers] = useState([]);
    const [newmessageflag,setNewmwssageflag ] = useState(false)
    const socket = useRef();
    useEffect(()=>{
        socket.current = io('https://chatting-app-i9gw.onrender.com')
    },[])
    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            setActiveUsers,
            activeusers,
            newmessageflag,
            setNewmwssageflag,
        }}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider;
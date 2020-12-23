import React,{useContext,useState} from 'react';

const CurrentTimeContext = React.createContext()
const UpdatedTimeContext = React.createContext()


export function CTimeContext(){
   return useContext(CurrentTimeContext)
}

export function UpTimeContext(){
   return useContext(UpdatedTimeContext)
}

const TimeContext = ({children}) => {

    const [val, updateVal] = useState(new Date().toLocaleTimeString())

    const Udval =()=>{
      return  updateVal(new Date().toLocaleTimeString())
    }
    return ( 
    <>
    <CurrentTimeContext.Provider value={val}>
        <UpdatedTimeContext.Provider value={Udval}>
           {children}
        </UpdatedTimeContext.Provider>
    </CurrentTimeContext.Provider>
    </> 
    );
}
 
export default TimeContext;
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

  async function ghvj() {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data = await response.json();
      
     
      
      return await JSON.stringify(data)

   }
   
   console.log(ghvj().then(res=>res.data))
    const [val, updateVal] = useState( 'ghvj')

    const Udval =()=>{
       console.log()
      return  updateVal('ghvj')
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
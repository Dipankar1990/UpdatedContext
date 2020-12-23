import React,{ useContext} from 'react';
import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import TimeContext from './components/TimeContext';


export const UserContext = React.createContext()
export const ProductContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{name:'Dipankar Maity', email:"something@gmail.com"}}>
        <ProductContext.Provider value={{productName:'Amway', cost:30}}>
          <CompC/>
          <TimeContext>
              <CompB/>
          </TimeContext>
        </ProductContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

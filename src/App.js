import { useState, React } from 'react';
import PersonField from './Field/PersonField';


function App() {
  const [shows, setShows] = useState(false)


  return (
    <div style={{width:250, margin:'auto', textAlign:'center', display:'flex', flexDirection:'column'}}>
    <h1 className='text-4xl underline'>Sleek</h1>
    {/* as a boss, added toggle button from daisyUi fir extra aestetics and added function to toggle shows boolean */}
    <input onClick={()=>{setShows(!shows)}} type="checkbox" style={{margin: '7px auto 7px auto',display: 'block'}} className="toggle toggle-info"  />
    {/* div with iteration funtion the if shows boolean is true, display the Personsfield else display nothing */}
    <div>{shows ? <PersonField/> : <p></p>}</div>
    </div>
  )
}

export default App
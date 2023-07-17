import Diet from './components/Diet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DietShow from './components/DietShow';
import DietEdit from './components/DietEdit';
import {Routes, Route} from "react-router-dom"
import DietDelete from './components/DietDelete';
import Workouts from './components/Workouts';
import WorkoutShow from './components/WorkoutsShow';
import ApiNinja from './components/ApiNinja';


function App() {
  return (
 
 <div className="App">
 <h1 className='title'>Gym Gems</h1>

<ApiNinja />
 <Routes>
   <Route path='/diet'>
     <Route path='' element={<Diet />} />
   </Route>

   <Route path='/diet/:dietID'>
     <Route path='' element={<DietShow />} />
     <Route path='edit' element={<DietEdit />} />
     <Route path='delete' element={<DietDelete />} />
   </Route>
   
   <Route path='/workout'>
     <Route path='' element={<Workouts />} />
   </Route>

   <Route path='/workout/:workoutID'>
     <Route path='' element={<WorkoutShow />} />
     <Route path='edit' element={<DietEdit />} />
     <Route path='delete' element={<DietDelete />} />
   </Route>
 </Routes>

</div>

  );
}

export default App;

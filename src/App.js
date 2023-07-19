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
import WorkoutEdit from './components/WorkoutsEdit';
import WorkoutDelete from './components/WorkoutsDelete';
import Home from './components/Home';

function App() {
  return (
 
 <div className="App">
    <ul className='u'>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">Diet</a></li>
  <li><a href="contact.asp">Workouts</a></li>
</ul>
    <div className='imgs'>

    <img src="/images/gym.jpg" alt="" />
  <img className='II'src="/images/gym1.jpg" alt="" /> 
   <img className='II' src="/images/gym2.jpg" alt="" /> 
   <img className='II' src="/images/gym3.jpg" alt="" /> 
    </div>
  


 <Routes>

 <Route path='/home'>
<Route path='' element={<Home />} />
</Route>

 <Route path='/workoutff'>
<Route path='' element={<ApiNinja />} />
</Route>
   <Route path='/diet'>
     <Route path='' element={<Diet />} />
   </Route>

   <Route path='/diet/:dietId'>
     <Route path='' element={<DietShow />} />
     <Route path='edit' element={<DietEdit />} />
     <Route path='delete' element={<DietDelete />} />
   </Route>
   
   <Route path='/workout'>
     <Route path='' element={<Workouts />} />
   </Route>

   <Route path='/workout/:workoutId'>
     <Route path='' element={<WorkoutShow />} />
     <Route path='edit' element={<WorkoutEdit />} />
     <Route path='delete' element={<WorkoutDelete />} /> 
   </Route>
 </Routes>

</div>

  );
}

export default App;

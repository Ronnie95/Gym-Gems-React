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
    <ul className='u'>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">Diet</a></li>
  <li><a href="contact.asp">Workouts</a></li>
</ul>

  <img src="/images/gym.jpg" alt="" />
  <img className='II'src="/images/gym1.jpg" alt="" /> 
   <img className='II' src="/images/gym2.jpg" alt="" /> 
   <img className='II' src="/images/gym3.jpg" alt="" /> 
   <img className='II' src="/images/gym4.jpg" alt="" /> 
   
   <p>
   Welcome to the ultimate gym companion, your go-to web app for reaching new fitness heights! Get ready to power up your workouts, unleash your potential, and transform into the best version of yourself.

With our innovative web app, we've revolutionized the way you approach your fitness journey. Whether you're a seasoned gym enthusiast or just starting your fitness adventure, we've got you covered.

Discover a treasure trove of workout routines tailored to your goals and fitness level. From strength training to cardio blasts, our app offers a wide range of exercises that will challenge and motivate you to push past your limits.


</p> 

<div class="card">
  <div class="bg"></div>
  <div class="blob"></div>
</div>

<div className='card1'>
  <img clasname="car" src="/images/gym5.jpg" alt="" />
  <div class="container">
    <h4>Log your Workouts</h4>
    
  </div>
</div>
<div className='card2'>
  <img clasname="car" src="/images/gym5.jpg" alt="" />
  <div class="container">
    <h4>Log your Food</h4>
 
  </div>
</div>
<div className='card3'>
  <img clasname="car" src="/images/gym5.jpg" alt="" />
  <div class="container">
    <h4>View exercises</h4>
 
  </div>
</div>


<home />

 <Routes>
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

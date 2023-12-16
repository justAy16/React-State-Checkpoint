import {React} from "react";
// imported person object
import { person } from "../Components/Persons";
import TimerComponent from '../Components/TimerComponent';

// created person field to be rendered in the App.js
function PersonField() {
  return (
    // added style using daisyUI class
    <div className="card shadow-lg bg-base-100 w-64 hover:shadow-2xl hover:cursor-pointer focus:ring focus:ring-blue-900">
        <figure><img src={person.imgSrc} alt="Ayomide"></img></figure>
        <div className="card-body">
            <h2>Fullname: <p className="card-title">{person.fullName}</p></h2>
            <h2>Bio: <span className="card-title">{person.bio}</span></h2>
            <h2>Profession: <span className="card-title">{person.profession}</span></h2>
            <div><TimerComponent/></div>
        </div>
    </div>
  )
}

export default PersonField
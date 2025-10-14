import React from 'react';
import FlightBookingForm from './components/Form';
import ProfileWizard from './components/ProfileWizard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <FlightBookingForm />
      <ProfileWizard />
    </div>
  );
}

export default App;

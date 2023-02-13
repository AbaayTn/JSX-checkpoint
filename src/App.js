import profilephoto from './Component/Profile/ProfilePhoto';
import fullname from './Component/Profile/FullName';
import address from './Component/Profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
    <br></br><br></br><br></br>
    {profilephoto()}<br></br><br></br><br></br>
    {fullname()}<br></br><br></br><br></br>
    {address()}
    </div>
  );
}

export default App;

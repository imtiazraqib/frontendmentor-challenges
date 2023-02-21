import QRcard from './Components/QRcard';
import qrImage from './Assets/image-qr-code.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <QRcard source={qrImage}
      heading='Improve your front-end skills by building projects'
      description='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'/>
    </div>
  );
}

export default App;

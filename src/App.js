import './App.css';
import Grocery from './components/Grocery';

function App() {
  return (
    <div>
      <div style={{
        width : "600px",
        height : "500px",
        backgroundColor : "aquamarine",
        margin : "50px auto",
        borderRadius : "25px",
        padding : "0 0 0 12%",
        overflow : "scroll",
      }}>
        <Grocery/>
      </div>
    </div>
  );
}



export default App;

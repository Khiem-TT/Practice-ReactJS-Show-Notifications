import {useState} from 'react'
import './App.css'
import Hello from "./components/Hello.jsx";

function App() {
    const [display, setDisplay] = useState(true);
    const Delete = () => {
        alert('The component is going to be unmounted');
        setDisplay(false);
    }
    let hello;
    if (display) {
        hello = <Hello/>;
    }
    return (
        <div>
            {hello}
            <button onClick={Delete}>Delete the component</button>
        </div>
    )
}

export default App

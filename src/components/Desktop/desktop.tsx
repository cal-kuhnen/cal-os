import { useState } from 'react';
import Taskbar from '../Taskbar/taskbar';
import Window from '../Window/window';
import './desktop.css';

const Desktop = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);
  return (
    <div id="desktop" className="desktop">
      <Window 
        id='test'
        title='Test' 
        height={ mobile ? 'calc(100vh - 30px)' : '90vh'} 
        width={ mobile ? '100vw' : '53vw'} 
        x={mobile ? 0 : 1} 
        y={mobile ? 0 : 3} 
        z={ 1 }
        content={() => <div></div>}/>
        <Window 
        id='test2'
        title='Test2' 
        height={ mobile ? 'calc(100vh - 30px)' : '50vh'} 
        width={ mobile ? '100vw' : '40vw'} 
        x={mobile ? 0 : 2} 
        y={mobile ? 0 : 3} 
        z={ 2 }
        content={() => <div></div>}/>
        <Window 
        id='test3'
        title='Test3' 
        height={ mobile ? 'calc(100vh - 30px)' : '60vh'} 
        width={ mobile ? '100vw' : '10vw'} 
        x={mobile ? 0 : 3} 
        y={mobile ? 0 : 3} 
        z={ 3 }
        content={() => <div></div>}/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;
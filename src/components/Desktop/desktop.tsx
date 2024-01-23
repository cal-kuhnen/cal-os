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
        content={() => <div></div>}/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;
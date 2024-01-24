import { useState } from 'react';
import Taskbar from '../Taskbar/taskbar';
import Window from '../Window/window';
import './desktop.css';
import { WindowInfo, WindowInitial } from '../../models/window.model';

const Desktop = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);
  const [windows, setWindows] = useState<WindowInfo[]>([]);

  const addWindow = (window: WindowInitial) => {
    console.log('adding window');
    const newWindows = [...windows];
    const zSetWindow: WindowInfo = {
      ...window,
      id: 1,
      z: windows.length + 1,
      removeWindow: removeWindow,
    };
    newWindows.unshift(zSetWindow);
    setWindows(newWindows);
    console.log(windows);
  }

  const removeWindow = (windowId: number) => {
    const newWindows = windows;
    newWindows.splice(newWindows.findIndex(window => window.id === windowId), 1);
    setWindows(newWindows);
  }

  return (
    <div id="desktop" className="desktop">
      { windows.map(window => (
        <Window 
          id={ window.id }
          title={ window.title }
          height={ window.height } 
          width={ window.width }
          x={ window.x }
          y={ window.y }
          z={ window.z }
          content={ window.content }
          removeWindow={ removeWindow }
        />
      ))}
      <Taskbar windows={windows} addWindow={addWindow} removeWindow={removeWindow} />
    </div>
  )
}

export default Desktop;
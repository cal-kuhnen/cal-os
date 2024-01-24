import { WindowArray, WindowInfo, WindowInitial } from '../../models/window.model';
import Start from './Start/start';
import './taskbar.css';

const Taskbar = (props: WindowArray) => {
  const testWindow: WindowInitial = {
    title: 'Dynamic bro',
    height: '30vh',
    width: '20vh',
    x: 3,
    y: 2,
    content: () => (<div></div>),
  };

  return (
    <div className="taskbar" onClick={ () => props.addWindow(testWindow) }>
    </div>
  )
}

export default Taskbar;
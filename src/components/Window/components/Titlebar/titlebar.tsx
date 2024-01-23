import { TitleBar } from '../../../../models/window.model';
import './titlebar.css';

const Titlebar = (props: TitleBar) => {
  return (
    <div className='title-bar'>
      <div className='header'>
        { props.icon && <img className='icon' src={props.icon}></img>}
        <div className='title'>{props.title}</div>
      </div>
      <div className='window-buttons'>
        <div className='window-button minimize'>
        </div>
        <div className='window-button maximize'>
        </div>
        <div className='window-button close'>
        </div>
      </div>
    </div>
  )
}

export default Titlebar;
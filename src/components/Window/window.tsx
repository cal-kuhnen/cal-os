import { useCallback } from 'react';
import { useDraggable } from '../../hooks/useDraggable';
import { Position, WindowInfo } from '../../models/window.model';
import Titlebar from './components/Titlebar/titlebar';
import './window.css';

const Window = (props: WindowInfo) => {
  const handleDrag = useCallback(
    (pos: Position) => ({
      x: Math.max(0, pos.x),
      y: Math.max(0, pos.y)
    }),
    []
  );

  const [ref, pressed] = useDraggable({
    onDrag: handleDrag
    },
    { x: window.innerWidth * (props.x / 100), y: window.innerHeight * (props.y / 100) });

  const initialSize = {
    height: props.height,
    width: props.width,
    transform: `translate(${props.x}vw, ${props.y}vh)`,
    zIndex: props.z || 1,
  }

  const handleClick = (e: any) => {
    const elements = document.getElementsByClassName('window') as HTMLCollectionOf<HTMLElement>;
    const currentZIndex = Number(e.currentTarget.style.zIndex);
    for(let i = 0; i < elements.length; i++) {
      if (elements[i].id !== 'success' && elements[i].id !== 'error' && currentZIndex < elements.length) {
        const zIndex = Number(elements[i].style.zIndex);
        if (zIndex > 1) {
          elements[i].style.zIndex = (zIndex - 1).toString()
        }
      }
      e.currentTarget.style.zIndex = Number(elements.length);
    }
  }

  const content = props.content();

  return (
    <div key={props.title} id={props.id} className='window' style={initialSize} ref={ref as any} onMouseDown={handleClick}>
      <Titlebar title={props.title} icon={props.icon ? props.icon : ''}/>
      <div className='window-content'>
        {content}
      </div>
    </div>
  );
};

export default Window;
import { 
  useEffect,
  useCallback,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import { Position } from '../models/window.model';

const id = ({ x, y }: Position) => ({ x, y });
export const useDraggable = ({ onDrag = id } = {}, startPos: Position) => {
  const [pressed, setPressed] = useState(false);
  const position = useRef({ x: startPos.x, y: startPos.y });
  const ref: MutableRefObject<HTMLElement | undefined> = useRef();
  const unsubscribe: any = useRef();

  const legacyRef = useCallback((elem: HTMLElement) => {
    ref.current = elem;
    if (unsubscribe.current) {
      unsubscribe.current();
    }
    if (!elem) {
      return;
    }
    const handleMouseDown = (e: any) => {
        // only drag if pressing title bar of window
      if (e !== null && e.target && (e.target.className === 'title-bar' || e.target.className === 'title')) {
        setPressed(true);
      }
    };
    elem.addEventListener("mousedown", handleMouseDown);
    unsubscribe.current = () => {
      elem.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    if (!pressed) {
      return;
    }
    const handleMouseMove = (event: any) => {
      if (!ref.current || !position.current) {
        return;
      }
      
      const pos = position.current;
      const elem = ref.current;
      position.current = onDrag({
        x: pos.x + event.movementX,
        y: pos.y + event.movementY
      });
      elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    };
    const handleMouseUp = (e: any) => {
      setPressed(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      //handleMouseMove.cancel();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [pressed, onDrag]);

  return [legacyRef, pressed];
};
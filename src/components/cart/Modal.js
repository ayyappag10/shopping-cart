import React,{useEffect, useRef} from "react"
import ReactDOM from 'react-dom';

const modalroot = document.getElementById("modal-root");

const Modal=(props)=>{
    const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
    useEffect(()=>{
            modalroot.appendChild(elRef.current)
        return  ()=>{modalroot.removeChild(elRef.current)}
        },[]);    

    return(
        !props.show ? null:
        ReactDOM.createPortal(
            props.children , elRef.current
        )
    )
}

export default Modal;
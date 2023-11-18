import React, { useEffect, useRef, useState } from "react";

type Props = {
  render: (props: {
    ref: React.RefObject<HTMLDivElement>;
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  }) => JSX.Element;
};

let highestZ = 1;

export default function DragDropBox({ render }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [state, setState] = useState({
    prevMouseX: 0,
    prevMouseY: 0,

    mouseX: 0,
    mouseY: 0,

    velocityX: 0,
    velocityY: 0,

    boxX: 0,
    boxY: 0,
  });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    ref.current!.style.zIndex = (highestZ++).toString();

    setIsDragging(true);

    if (e.button === 0) {
      setState((prev) => ({
        ...prev,
        prevMouseX: e.clientX,
        prevMouseY: e.clientY,
      }));
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    state.mouseX = e.clientX;
    state.mouseY = e.clientY;

    state.velocityX = state.mouseX - state.prevMouseX;
    state.velocityY = state.mouseY - state.prevMouseY;

    if (isDragging) {
      state.boxX += state.velocityX;
      state.boxY += state.velocityY;

      state.prevMouseX = state.mouseX;
      state.prevMouseY = state.mouseY;

      ref.current!.style.transform = `translate(${state.boxX}px, ${state.boxY}px)`;
    }

    setState(state);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return <>{render({ ref, onMouseDown })}</>;
}

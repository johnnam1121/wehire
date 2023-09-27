'use client'
import React, { useEffect, useRef } from 'react';

export default function Clock() {
  const pathRefs = {
    path1: useRef<SVGPathElement>(null),
    path2: useRef<SVGPathElement>(null),
    path3: useRef<SVGPathElement>(null),
    path4: useRef<SVGPathElement>(null),
    path5: useRef<SVGPathElement>(null),
    path6: useRef<SVGPathElement>(null),
    path7: useRef<SVGPathElement>(null),
    path8: useRef<SVGPathElement>(null),
  };

  useEffect(() => {
    const animatePath = (pathRef: React.MutableRefObject<SVGPathElement | null>) => {
      const path = pathRef.current;

      if (path) {
        const totalLength = path.getTotalLength();
        const totalLengthStr = totalLength.toString();

        // Set the initial values for the animation
        path.style.strokeDasharray = `${totalLengthStr} ${totalLengthStr}`;
        path.style.strokeDashoffset = totalLengthStr;

        // Animate the path
        path.animate(
          [
            { strokeDashoffset: totalLength },
            { strokeDashoffset: 0 }
          ],
          {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
          }
        );
      }
    };

    // Iterate through each path ref and animate the path
    Object.values(pathRefs).forEach((pathRef) => animatePath(pathRef));

  }, [pathRefs]);

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      id="nectar-svg-animation-instance-0"
      style={{ height: '70px', width: '70px' }}
    >
      <path
        ref={pathRefs.path1}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,12L32,32L41,41"
      ></path>
      <path
        ref={pathRefs.path2}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M4,32L8,32"
      ></path>
      <path
        ref={pathRefs.path3}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M56,32L60,32"
      ></path>
      <path
        ref={pathRefs.path4}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,60L32,56"
      ></path>
      <path
        ref={pathRefs.path5}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,8L32,4"
      ></path>
      <path
        ref={pathRefs.path6}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,63C14.879,63,1,49.121,1,32S14.879,1,32,1"
      ></path>
      <path
        ref={pathRefs.path7}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,63c17.121,0,31-13.879,31-31 c0-6.713-2.134-12.926-5.759-18l-5.62-5.621"
      ></path>
      <path
        ref={pathRefs.path8}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="bevel"
        strokeMiterlimit="10"
        d="M51,19L51,8L62,8"
      ></path>
    </svg>
  );
}

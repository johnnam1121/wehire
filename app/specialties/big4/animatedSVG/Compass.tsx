'use client'
import React, { useEffect, useRef } from 'react';

export default function Compass() {
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
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      id="nectar-svg-animation-instance-1"
      style={{ height: '70px', width: '70px' }}
    >
      <path
        ref={pathRefs.path1}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        d="M3.7079999999999984,35A28.292,28.292 0,1,1 60.292,35A28.292,28.292 0,1,1 3.7079999999999984,35"
      />
      <path
        ref={pathRefs.path2}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="bevel"
        strokeMiterlimit="10"
        d="M37,40L45,21L26,29L19,47Z"
      />
      <path
        ref={pathRefs.path3}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        d="M26,29L37,40"
      />
      <path
        ref={pathRefs.path4}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M36.9,7C36.965,6.677,37,6.342,37,6c0-2.761-2.239-5-5-5s-5,2.239-5,5c0,0.342,0.035,0.677,0.1,1"
      />
      <path
        ref={pathRefs.path5}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,7L32,12"
      />
      <path
        ref={pathRefs.path6}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,58L32,63"
      />
      <path
        ref={pathRefs.path7}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M60,35L55,35"
      />
      <path
        ref={pathRefs.path8}
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M9,35L4,35"
      />
    </svg>
  );
}

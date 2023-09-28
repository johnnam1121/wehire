'use client'
import React, { useEffect, useRef } from 'react';

export default function Arrow() {
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
      id="nectar-svg-animation-instance-2"
      className="animated-svg"
    >
      <path ref={pathRefs.path1} fill="none" stroke="#128DF0" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" d="M1,12L1,1L12,1" ></path>
      <path ref={pathRefs.path2} fill="none" stroke="#128DF0" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" d="M12,63L1,63L1,52" ></path>
      <path ref={pathRefs.path3} fill="none" stroke="#128DF0" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" d="M63,52L63,63L52,63" ></path>
      <path ref={pathRefs.path4} fill="none" stroke="#128DF0" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" d="M52,1L63,1L63,12" ></path>
      <path ref={pathRefs.path5} fill="none" stroke="#128DF0" stroke-width="2" stroke-miterlimit="10" d="M2,2L22,22" ></path>
      <path ref={pathRefs.path6} fill="none" stroke="#128DF0" stroke-width="2" stroke-miterlimit="10" d="M42,42L62,62" ></path>
      <path ref={pathRefs.path7} fill="none" stroke="#128DF0" stroke-width="2" stroke-miterlimit="10" d="M2,62L22,42" ></path>
      <path ref={pathRefs.path8} fill="none" stroke="#128DF0" stroke-width="2" stroke-miterlimit="10" d="M42,22L62,2" ></path>
    </svg>
  );
}
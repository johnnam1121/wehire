'use client'
'use client'
import React, { useEffect, useRef } from 'react';

export default function Clock() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const animatePath = (path: SVGPathElement) => {
      const totalLength = path.getTotalLength();
      const totalLengthStr = totalLength.toString();

      path.style.strokeDasharray = `${totalLengthStr} ${totalLengthStr}`;
      path.style.strokeDashoffset = totalLengthStr;

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
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && svgRef.current) {
          // If the SVG is in view, animate each path
          const paths = svgRef.current.querySelectorAll<SVGPathElement>('path');
          paths.forEach((path) => animatePath(path));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      // Disconnect the observer when component is unmounted
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
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
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        d="M3.7079999999999984,35A28.292,28.292 0,1,1 60.292,35A28.292,28.292 0,1,1 3.7079999999999984,35"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="bevel"
        strokeMiterlimit="10"
        d="M37,40L45,21L26,29L19,47Z"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        d="M26,29L37,40"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M36.9,7C36.965,6.677,37,6.342,37,6c0-2.761-2.239-5-5-5s-5,2.239-5,5c0,0.342,0.035,0.677,0.1,1"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,7L32,12"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,58L32,63"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M60,35L55,35"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M9,35L4,35"
      />
    </svg>
  );
}
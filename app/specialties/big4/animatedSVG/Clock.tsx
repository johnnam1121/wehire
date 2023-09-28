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
        strokeMiterlimit="10"
        d="M32,12L32,32L41,41"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M4,32L8,32"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M56,32L60,32"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,60L32,56"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,8L32,4"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,63C14.879,63,1,49.121,1,32S14.879,1,32,1"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M32,63c17.121,0,31-13.879,31-31 c0-6.713-2.134-12.926-5.759-18l-5.62-5.621"
      />
      <path
        fill="none"
        stroke="#128DF0"
        strokeWidth="2"
        strokeLinejoin="bevel"
        strokeMiterlimit="10"
        d="M51,19L51,8L62,8"
      />
    </svg>
  );
}
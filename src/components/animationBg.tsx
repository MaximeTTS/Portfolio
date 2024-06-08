import React from "react";

interface LinesProps {
  hideMiddleLine?: boolean;
}

function Lines({ hideMiddleLine }: LinesProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <div className="absolute -left-40 top-0 z-10 hidden h-full w-px bg-white bg-opacity-10 lg:block">
        <div className="animate-drop animation-delay-0 absolute left-0 top-[-50%] h-[15vh] w-full bg-gradient-to-b from-transparent to-themeColor"></div>
      </div>
      {!hideMiddleLine && (
        <div className="absolute left-1/2 top-0 z-0 h-full w-px bg-white bg-opacity-10">
          <div className="animate-drop animation-delay-2000 absolute left-0 top-[-50%] h-[15vh] w-full bg-gradient-to-b from-transparent to-themeColor"></div>
        </div>
      )}
      <div className="absolute -right-40 top-0 z-10 hidden h-full w-px bg-white bg-opacity-10 lg:block">
        <div className="animate-drop animation-delay-2500 absolute left-0 top-[-50%] h-[15vh] w-full bg-gradient-to-b from-transparent to-themeColor"></div>
      </div>
    </div>
  );
}

export default Lines;

// components/GoogleMap.tsx
"use client";

import React, { useEffect, useRef } from "react";

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = () => {
      const map = new google.maps.Map(mapRef.current!, {
        center: { lat: 49.050966, lng: 2.100823 },
        zoom: 13,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} className="h-64 w-full rounded-xl sm:h-96"></div>;
};

export default GoogleMap;

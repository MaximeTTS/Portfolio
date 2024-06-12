// components/GoogleMap.tsx
"use client";

import React, { useRef, useEffect } from "react";

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    console.log("Google Maps API Key:", apiKey); // Vérifiez que la clé API est correctement lue

    if (!mapRef.current || !apiKey) {
      console.error("Google Maps API Key is missing or mapRef is not available");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
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

// src\components\RadarMap\RadarMap.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";

const RadarMapNoSSR = dynamic(() => import("./RadarMapContent"), { ssr: false });

const RadarMap = () => {
  return (
    <div>
      <h2>Radar Map</h2>
      <RadarMapNoSSR />
    </div>
  );
};

export default RadarMap;

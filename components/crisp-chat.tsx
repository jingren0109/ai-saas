"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("28d1a3d3-480e-4ec9-b5e9-2812e013bd07");
  }, []);

  return null;
};

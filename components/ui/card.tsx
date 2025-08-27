"use client";

import * as React from "react";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={["rounded-xl border border-neutral-200 bg-white/80 backdrop-blur shadow-sm", className].filter(Boolean).join(" ")} {...props} />
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={["p-5", className].filter(Boolean).join(" ")} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={["p-5 pt-0", className].filter(Boolean).join(" ")} {...props} />
);



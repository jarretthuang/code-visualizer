"use client";
import React from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Canvas() {
  return (
    <div className="flex w-full flex-1 rounded-xl bg-slate-200/90">
      <div className="h-full w-full p-10">
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </div>
  );
}

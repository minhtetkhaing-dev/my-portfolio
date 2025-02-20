"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { Mesh, Color } from 'three';
import { skills } from "@/data/skills";

const calculatePosition = (index: number, total: number, radius: number): [number, number, number] => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ] as [number, number, number];
  };

  function SkillText({ text, position }: { text: string; position: [number, number, number] }) {
    const textRef = useRef<Mesh>(null);
    const [hovered, setHovered] = useState<boolean>(false);
    const color = new Color();
  
    useFrame(({ camera }) => {
      if (textRef.current) {
        textRef.current.quaternion.copy(camera.quaternion);
        if (textRef.current.material) {
          const material = textRef.current.material as import('three').MeshBasicMaterial;
          if (hovered) {
            material.color.lerp(color.set('#8b5cf6'), 0.1);
          } else {
            // Create gradient-like effect based on position
            const gradientPosition = (position[1] + 3) / 6; // normalize to 0-1
            if (gradientPosition < 0.33) {
              material.color.lerp(color.set('#2563eb'), 0.1); // blue-600
            } else if (gradientPosition < 0.66) {
              material.color.lerp(color.set('#9333ea'), 0.1); // purple-600
            } else {
              material.color.lerp(color.set('#db2777'), 0.1); // pink-600
            }
          }
        }
      }
    });
  
    return (
      <Text
        ref={textRef}
        position={position}
        fontSize={0.2}
        color="#2563eb"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        material-depthWrite={false}
        renderOrder={1000}
      >
        {text}
      </Text>
    );
  }

export default function SkillsGlobe() {
    return (
      <div className="h-[350px] w-full p-2">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.4} 
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI * 3/4}
          />
          {skills.map((skill, i) => (
            <SkillText 
              key={i} 
              text={skill} 
              position={calculatePosition(i, skills.length, 3)} 
            />
          ))}
        </Canvas>
      </div>
    );
  }
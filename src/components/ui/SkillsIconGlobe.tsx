"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { useRef, useState } from "react";
import { Mesh, TextureLoader } from 'three';
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

function SkillIcon({ icon, position }: { icon: string; position: [number, number, number] }) {
    const meshRef = useRef<Mesh>(null);
    const [hovered, setHovered] = useState<boolean>(false);
    const [aspectRatio, setAspectRatio] = useState(1);
    const texture = new TextureLoader().load(icon, (loadedTexture) => {
      const image = loadedTexture.image;
      setAspectRatio(image.width / image.height);
    });
  
    useFrame(({ camera }) => {
      if (meshRef.current) {
        meshRef.current.quaternion.copy(camera.quaternion);
        if (meshRef.current.material) {
          const material = meshRef.current.material as import('three').Material & { opacity: number };
          if (hovered) {
            material.opacity = 1;
          } else {
            material.opacity = 1;
          }
        }
      }
    });
  
    return (
      <Plane
        ref={meshRef}
        position={position}
        args={[0.5, 0.5/aspectRatio]} // width and height of the plane
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshBasicMaterial
          attach="material"
          map={texture}
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </Plane>
    );
}

export default function SkillsIconGlobe() {
    return (
      <div className="h-[350px] w-full p-2">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.4} 
            enableZoom={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
          {skills.map((skill, i) => (
            <SkillIcon 
              key={i} 
              icon={skill.icon} 
              position={calculatePosition(i, skills.length, 3)} 
            />
          ))}
        </Canvas>
      </div>
    );
}
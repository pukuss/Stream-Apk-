import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StellarGenesis = () => {
  const mesh = useRef();
  const count = 10000;
  
  // 1. Create Data Buffers (Memory-Efficient GPU Access)
  const [dummy] = useMemo(() => [new THREE.Object3D()], []);
  const tempParticles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        position: new THREE.Vector3().random().subScalar(0.5).multiplyScalar(20),
        offset: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.05
      });
    }
    return arr;
  }, [count]);

  // 2. High-Performance Frame Loop
  useFrame(({ mouse, clock }) => {
    const time = clock.getElapsedTime();
    tempParticles.forEach((p, i) => {
      // Gravitational pull toward mouse
      const target = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);
      p.position.lerp(target, 0.001 * p.speed);
      
      // Update instance matrix (The "God-Tier" performance trick)
      dummy.position.copy(p.position);
      dummy.scale.setScalar(0.02 + Math.sin(time + p.offset) * 0.01);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial 
        color="#06b6d4" 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending} 
      />
    </instancedMesh>
  );
};

export default function App() {
  return (
    <div className="fixed inset-0 bg-[#000]">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <StellarGenesis />
      </Canvas>
    </div>
  );
}
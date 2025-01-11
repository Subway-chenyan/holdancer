import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import useStageStore from '../store/stageStore';

const Stage = () => {
  const { stageSettings, dancers, props } = useStageStore();

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 5, 5], fov: 75 }}
        className="w-full h-full bg-gray-900"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Stage floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry 
            args={[stageSettings.width / 100, stageSettings.depth / 100]} 
          />
          <meshStandardMaterial color="#444444" />
        </mesh>

        {/* Dancers */}
        {dancers.map((dancer) => (
          <mesh
            key={dancer.id}
            position={[dancer.x / 100, 0.5, dancer.y / 100]}
          >
            <cylinderGeometry args={[0.2, 0.2, 1]} />
            <meshStandardMaterial color={dancer.color || '#ff0000'} />
          </mesh>
        ))}

        {/* Props */}
        {props.map((prop) => (
          <mesh
            key={prop.id}
            position={[prop.x / 100, prop.height / 200, prop.y / 100]}
            scale={[prop.width / 100, prop.height / 100, prop.depth / 100]}
          >
            <boxGeometry />
            <meshStandardMaterial color={prop.color || '#666666'} />
          </mesh>
        ))}

        <OrbitControls />
        <gridHelper args={[20, 20]} />
      </Canvas>
    </div>
  );
};

export default Stage;

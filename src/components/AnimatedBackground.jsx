import React, { useRef, useMemo, useContext } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { AdditiveBlending, NormalBlending } from 'three';
import { ThemeContext } from '../context/ThemeContext';

const Stars = (props) => {
  const ref = useRef();

  const [positions, velocities] = useMemo(() => {
    const count = 5000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
        pos[i] = (Math.random() - 0.5) * 10;
    }
    const vels = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        vels[i] = 0.1 + Math.random() * 0.1;
    }
    return [pos, vels];
  }, []);
  
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.1);
    if (ref.current) {
      const posArray = ref.current.geometry.attributes.position.array;
      for (let i = 0; i < posArray.length / 3; i++) {
          const i3 = i * 3;
          posArray[i3 + 1] -= velocities[i] * dt;
          if (posArray[i3 + 1] < -5) {
              posArray[i3 + 1] = 5;
          }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
      <PointMaterial
        transparent
        color={props.color}
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={props.blending}
      />
    </Points>
  );
};

const AnimatedBackground = () => {
  const { theme } = useContext(ThemeContext);
  const starColor = theme === 'light' ? '#4b0082' : '#9333ea';
  const starBlending = theme === 'light' ? NormalBlending : AdditiveBlending;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 2] }}>
        {theme === 'dark' && <color attach="background" args={['#000000']} />}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} />
        <Stars color={starColor} blending={starBlending} />
      </Canvas>
    </div>
  );
};
export default AnimatedBackground;
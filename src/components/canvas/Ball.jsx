import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture
 } from '@react-three/drei';

 import  Loader  from '../Loader';

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);


  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      >
          <ambientLight intensity={0.25}/>
          <directionalLight position={[0,0,0.05]}/>
          <mesh
            castShadow receiveShadow scale={2.75}
          >
                <icosahedronGeometry  args={[1,1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                />
          </mesh>
    </Float>
  )
}

const BallCanvas= ({ icon })=>{
  return(
      <Canvas
        frameloop='demand'
        gl={{preserveDrawingBuffer: true}}
      >
          <Suspense fallback={<Loader />}>
            <OrbitControls
              enableZoom={false}

            />
            <Ball imgUrl={icon} />
          </Suspense>

          <Preload all/>
      </Canvas>
  )
}
export default BallCanvas;
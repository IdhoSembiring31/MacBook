import { Environment, Lightformer } from '@react-three/drei'

import React from 'react'

function SpotLightSetup() {
  return (
    <group name="lights">
      {/* Environment tetap bagus untuk ambient + reflection */}
      <Environment resolution={500}>
        <group>
          <Lightformer
            form="rect"
            position={[-10, 0, -5]}
            intensity={10}
            scale={10}
         
          />
          <Lightformer
            form="rect"
            position={[10, 0, -5]}
            intensity={10}
            scale={10}
            
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 3]}
        angle={0.45}          
        penumbra={0.8}       
        decay={0.8}          
        intensity={Math.PI * 2} 
        castShadow={true}   />  

      <spotLight
        position={[0, -25, 10]}
        angle={0.5}
        penumbra={1}
        decay={1}
        intensity={Math.PI * 1.5}
      />

      <spotLight
        position={[0, 15, 5]}
        angle={0.4}
        penumbra={0.9}
        decay={0.9}
        intensity={Math.PI * 1}
      />
    </group>
  )
}

export default SpotLightSetup
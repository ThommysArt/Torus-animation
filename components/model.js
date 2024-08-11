import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useTheme } from 'next-themes';

export default function Model() {
    const { nodes } = useGLTF("/torrus.glb");
    const { viewport } = useThree();
    const torus = useRef(null);
    const { theme } = useTheme();
    
    useFrame(() => {
        torus.current.rotation.x += 0.02;
    });

    const materialProps = {
        thickness: 0.2,
        roughness: 0.1,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
        transparent: true,
        depthWrite: false,
    };
    

    const textColor = theme === 'dark' ? '#E5EDFD7B' : '#E5EDFD7B'; // Adjust colors based on theme

    return (
        <group scale={viewport.width / 3.75}>
            <Text 
                font="/JosefinSans-Bold.ttf" 
                position={[0, 0, -1]} 
                fontSize={0.5} 
                fontWeight={2000} 
                color={textColor}  // Dynamically set the text color
                anchorX="center" 
                anchorY="middle" 
                textAlign='justify'
            >
                Keabou Thomson
            </Text>
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    );
}

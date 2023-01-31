import {MeshReflectorMaterial} from '@react-three/drei'
import {useCanvasPlayer} from '@/contexts/CanvasPlayer/Consumer'

export default function Ground () {
    const {colors} = useCanvasPlayer()

    return (
        <mesh
            position={[0, -2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[10, 10]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={2}
                depthScale={1}
                minDepthThreshold={0.5}
                maxDepthThreshold={1.2}
                color={colors.black}
                metalness={1}
                roughness={1}
                mirror={0}     
            />
        </mesh>
    )
}
import {useMemo, useState} from 'react'
import {Instances} from '@react-three/drei'
import {Vector3} from 'three'
import {useCanvasPlayer} from '@/contexts/CanvasPlayer/Consumer'
import ShapeInstance, {ShapeInstancePosition} from '@/components/Experience/Scene/ShapeInstance'

type Positions = {
    odd: Array<ShapeInstancePosition>
    even: Array<ShapeInstancePosition>
}

export default function Shapes () {
    const {colors} = useCanvasPlayer()
    const [arpUp, setArpUp] = useState(true)

    const n = 8
    const start = -4
    const loop = n + start

    const isEven = (i: number, j: number): boolean =>
        ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0))

    const isVisible = (i: number, j: number): boolean =>
        (i + j < 1)

    const positions = useMemo(() => {
        const positions: Positions = {odd: [], even: []}
        let index = 0

        for (let i = start; i < loop; i++) {
            for (let j = start; j < loop; j++) {
                if (!isVisible(i, j)) {
                    continue
                }

                const pos: ShapeInstancePosition = {
                    position: new Vector3(i, 0, j),
                    index: j === start ? index : -1,
                }

                isEven(i, j)
                    ? positions.even.push(pos)
                    : positions.odd.push(pos)

                if (j === start) {
                    index++
                }
            }
        }

        return positions
    }, [start, loop])

    const getShapeInstance = (type: keyof Positions, index: number, props: ShapeInstancePosition): JSX.Element => {
        return (
            <ShapeInstance
                key={`${type}-${index}`}
                start={start}
                end={loop}
                arpUp={arpUp}
                reverseArp={() => setArpUp(!arpUp)}
                {...props}
            />
        )
    }

    return (
        <group>
            <Instances>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial
                    color={[1.38, 0, 39]}
                    roughness={1}
                    toneMapped={false}
                    emissive={colors.magenta}
                    emissiveIntensity={0.05}
                />
                {positions.even.map((positionProps, i) =>
                    getShapeInstance('even', i, positionProps)
                )}
            </Instances>
            <Instances>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial
                    color={[0, 1.5, 1.41]}
                    roughness={1}
                    toneMapped={false}
                />
                {positions.odd.map((positionProps, i) =>
                    getShapeInstance('odd', i, positionProps)
                )}
            </Instances>
        </group>
    )
}
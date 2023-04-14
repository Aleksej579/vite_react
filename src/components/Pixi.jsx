import {React, useMemo} from 'react'
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

function Pixi() {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    return (
        <section className='w-3/4 mx-auto'>
            <h2>Image</h2>
            <Stage>
                <Sprite
                    image="https://pixijs.io/pixi-react/img/bunny.png"
                    x={400}
                    y={270}
                    anchor={{ x: 0.5, y: 0.5 }}
                />

                <Container x={400} y={330}>
                    <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
                </Container>
            </Stage>
        </section>
    )
}

export default Pixi

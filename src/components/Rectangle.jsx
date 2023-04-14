import React, { useCallback } from 'react';
import { Graphics, Stage } from '@pixi/react';


function Rectangle() {

    const draw = useCallback((g) => {
        g.clear();
        g.beginFill('blue');
        g.lineStyle(4, 'red');
        g.moveTo(50, 50);
        g.lineTo(150, 50);
        g.lineTo(100, 100);
        g.lineTo(50, 50);
        g.endFill();

        g.lineStyle(2, 0x0000ff, 1);
        g.beginFill(0xff700b, 1);
        g.drawRect(50, 150, 120, 120);
        g.lineStyle(2, 0xff00ff, 1);
        g.beginFill(0xff00bb, 0.25);
        g.drawRoundedRect(150, 100, 300, 100, 15);
        g.endFill();

        g.lineStyle(0);
        g.beginFill(0xffff0b, 0.5);
        g.drawCircle(470, 90, 60);
        g.endFill();
    }, []);
    
    return (
        <section className='w-3/4 mx-auto'>
            <h2>Image</h2>
            <Stage width={600} height={300} options={{ backgroundColor: 0xffffff }}>
                <Graphics draw={draw} />
            </Stage>
        </section>
    )
}

export default Rectangle

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
const Animated = () => {
    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#00203FFF' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: '#ADEFD1FF' },


    })
    // ...
    return <animated.div style={styles}> <span style={{ fontSize: "50px", fontWeight: 800 }}>SMART LEARN</span> </animated.div>
};

export default Animated;
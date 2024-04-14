import { Box } from '@mui/system';
import { useEffect } from 'react';

export default function Debug() {
    // useEffect(() => {
    // document.documentElement.style.overflow = 'hidden';
    
    //     return () => {
    //       document.documentElement.style.overflow = 'auto';
    //       document.body.style.overflow = 'auto';
    //     };
    // }, []);

    return (
        // <>
            <Box sx={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                margin: '0',
                padding: '0',
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                left: '-20px',
                top: '-10px',
                bgcolor: "#87CEEB"
            }} />
    );
}
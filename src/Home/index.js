import './index.css';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import logo from '../Assets/clash-royale-logo.png'
import text from '../Assets/clash-royale-text.png'
import battle_button from '../Assets/battle-button.png'

export default function Home() {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
            }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    width: "300px",
                    height: "400px",
                    // bgcolor: "#FFFFFF"
                }}>
                    <img 
                      src={logo} 
                      style={{
                        width: "300px",
                        height: "200px",
                        position: "absolute",
                        top: "0%",
                      }}
                    />
                    <img 
                      src={text} 
                      style={{
                        width: "68%",
                        height: "10%",
                        position: "absolute",
                        top: "36%",
                        left: "2%"
                      }}
                    />
                    <img 
                      src={battle_button} 
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "75%",
                        top: "30%"
                      }}
                    />
                    <Button 
                      variant="text"
                      disableFocusRipple={true}
                      disableRipple={true}
                      href='../Cards'
                      sx={{
                        position: "absolute",
                        width: "75%",
                        height: "28%",
                        top: "52%",
                        left: "12%",
                        fontSize: "200%",
                        color: "Black"
                      }}
                    > BATTLE </Button>
                </Box>
            </Box>
        </>
    )
}
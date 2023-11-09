import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";

import { GoogleLogin } from '@react-oauth/google'
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from 'jwt-decode';

import {addUser} from '../../service/api';
const Component = styled(Box)`
    display:flex;
`
const dialogstyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'

}

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const QEcode = styled('img')(
    {
        height: 264,
        width: 264,
        margin: '50px 10px 10px 50px'
    }
)

const Title = styled(Typography)`
    font-size:1.5vw;
    font-weight: 300;
    color: #525252;
    font-family: inherit;
    margin-bottom:25px;

`
const StyledList = styled(List)`
    & > li{
        padding :0 ;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color:#4A4A4A;
    }
`
const LoginDialog =  () => {
    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res)=>{
        const decode =  jwt_decode(res.credential);
        setAccount(decode);
        await addUser(decode);
    }
    const onLoginError = (res)=>{
        console.log('Login failed ',res); 
    }
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogstyle }}
            hideBackdrop = {true}
        >
            <Component>
                <Container>
                    <Title>TO use WhatsApp on your computer:</Title>
                    <StyledList>
                        <ListItem>
                            1. Open WhatsApp on your computer
                        </ListItem>
                        <ListItem>
                            2. Tap Menu Settings and select WhatsApp
                        </ListItem>
                        <ListItem>
                            3. Point your phone to this screen to capture the code
                        </ListItem>
                    </StyledList>
                </Container>
                <Box style = {{position:'relative'}}>
                    <QEcode src={qrCodeImage} ALT='QR Code' />
                    <Box style = {{position:"absolute",top:'50%',transform:'translateX(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError = {onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
//Lib imports
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { useContext } from "react";
//Components
import LoginDialog from "./aacount/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
    height: 15%;
    background-color: #00A884;
    box-shadow:none;
`
const LoginHeader = styled(AppBar)`
    height: 30%;
    background-color: #00bfa5;
    box-shadow:none;
`
const Component = styled(Box)`
    height : 100vh;
    background: #DCDCDC;
`

const Messanger = () => {
    const { account } = useContext(AccountContext);
    return (
        <Component>
            {
                account ? <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>

                    <LoginDialog />
                    <ChatDialog />
                </>

                    : <>

                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>

                        <LoginDialog />
                    </>
            }
        </Component>
    )
}

export default Messanger;
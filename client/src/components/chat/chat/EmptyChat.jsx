import { Box, Divider } from '@mui/material'
import { emptyChatImage } from '../../../constants/data'
import styled from '@emotion/styled'

const Component = styled(Box)`
  background:#f8f9fa;
  padding:30px 0;
  text-align: center;
  height:100%;

`
const Container = styled(Box)`
  padding: 0 200px;
`
const Image = styled('img')({
  width: 400,
  marginTop: 100
})
const Title = styled(Box)`
  font-size:32px;
  margin25px 0 10px 0;
  font-family: inherit;
  font-weight:300;
  color:#41525d
`
const SubTitle = styled(Box)`
  font-size:14px;
  color:#667781;
  font-weight:400;
  font-family:inherit;
`
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt='whatsapp ' referrerpolicy="no-referrer"/>
        <Title>Whatsapp Web </Title>
        <SubTitle> Select Chat to Start</SubTitle>
        <Divider />
      </Container>
    </Component>
  )
}

export default EmptyChat;
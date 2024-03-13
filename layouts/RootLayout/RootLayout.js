import { useRouter } from 'next/router';
import FooterJSX from '../../components/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Box, Grid, GridItem, useColorMode, VStack } from '@chakra-ui/react'
import useAuth from '../../src/contexts/AuthContext';
import Header from "../../components/HeaderChat/Header";


export default function RootLayout ({ children }) {
  const router = useRouter();
  // const { colorMode } = useColorMode()
  const { isAuthenticated } = useAuth();
  return (
    <Grid
  templateAreas={`"header header"
                  "body body"
                  "footer footer"
                  `}
  gridTemplateRows={'auto 1fr'}
  // gridTemplateColumns={'150px 1fr'}
  // h='200px'
  w={'100%'}
  h={'100vh'}
  gap='1'
  color={''}
  fontWeight='bold'
>
        <GridItem area={'header'} w={'100%'}>
            {(router.route === '/chat' || router.route === '/dashboard') && <Navbar />}
            {(router.route !== '/chat' &&
                router.route !== '/dashboard' &&
                !(router.route === '/recover_password' ||
                    router.route === '/login' ||
                    router.route === '/signup' ||
                    router.route === '/signupwithemail' ||
                    router.route === '/telegram' ||
                    router.route === '/resendEmail')) && <Navbar />}
        </GridItem>

<GridItem
area={'body'}
w={'100%'}
display={'flex'}
flexDirection={'column'}
backgroundColor={
  isAuthenticated ||
  router.route === '/apply'

  ? '#f5f6f8' : '#000000'}
justifyContent={
  router.route === '/billing' ? 'flex-start' :
  'center'}
>
      {children}

</GridItem>

<GridItem area={'footer'}
backgroundColor={'#000'}
>
{
router.route === '/login' ||
router.route === '/recover_password' ||
router.route === '/dashboard' ||
router.route === '/plans' ||
router.route === '/billing' ||
router.route === '/profile' ||
router.route === '/signup' ||
router.route === '/trial' ||
router.route === '/telegram' ||
router.route === '/signupwithemail'  ||
router.route === '/resendEmail' ||
router.route === '/chat'
?

null : <FooterJSX />}

</GridItem>


</Grid>
  )
}

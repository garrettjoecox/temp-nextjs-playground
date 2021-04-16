import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter();

  return (
    <HStack>
      <Link href="/">
        <a><Button colorScheme={router.route === '/' ? 'blue' : 'gray'}>Static</Button></a>
      </Link>
      <Link href="/ssg">
        <a><Button colorScheme={router.route === '/ssg' ? 'blue' : 'gray'}>SSG</Button></a>
      </Link>
      <Link href="/ssr">
        <a><Button colorScheme={router.route === '/ssr' ? 'blue' : 'gray'}>SSR</Button></a>
      </Link>
    </HStack>
  )
}

export default Nav

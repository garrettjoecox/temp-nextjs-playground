import { VStack } from '@chakra-ui/layout'
import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from './clock'
import Counter from './counter'
import Nav from './nav'

export default function Page() {
  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'TICK',
      source: 'client',
      lastUpdate: Date.now(),
    })
  }, 1000)

  return (
    <VStack alignItems="flex-start">
      <Nav />
      <Clock />
      <Counter />
    </VStack>
  )
}

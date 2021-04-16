import { useSelector, useDispatch } from 'react-redux'
import { Button, Heading, HStack, VStack } from '@chakra-ui/react';

const useCounter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })
  const decrement = () =>
    dispatch({
      type: 'DECREMENT',
    })
  const reset = () =>
    dispatch({
      type: 'RESET',
    })
  return { count, increment, decrement, reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <VStack align="flex-start">
      <Heading>
        Count: <span>{count}</span>
      </Heading>
      <HStack>
      <Button onClick={increment}>+1</Button>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={reset}>Reset</Button>
      </HStack>
    </VStack>
  )
}

export default Counter

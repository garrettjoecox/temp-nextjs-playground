import { VStack, Text } from '@chakra-ui/layout'
import { useSelector, shallowEqual } from 'react-redux'

const useClock = () => {
  return useSelector(
    (state) => ({
      lastUpdate: state.lastUpdate,
      source: state.source,
    }),
    shallowEqual
  )
}

const formatTime = (time) => {
  // cut off except hh:mm:ss
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const { lastUpdate, source } = useClock()
  return (
    <VStack alignItems="flex-start">
      <Text>
        Source: <Text display="inline" fontWeight="bold">{source}</Text>
      </Text>
      <Text>
        at: <Text display="inline" fontWeight="bold">{formatTime(lastUpdate)}</Text>
      </Text>
    </VStack>
  )
}

export default Clock

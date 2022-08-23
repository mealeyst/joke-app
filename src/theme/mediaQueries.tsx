import { StyledProps } from 'styled-components'
import { THEME } from './Theme'

type Queries = typeof THEME['breakpoints']

export const query = (queryPath: Queries) => {
  const mq = THEME.breakpoints[queryPath]
  console.log(mq)
  return mq
}

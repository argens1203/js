import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export function useHook(): [number, () => void] {
  const [counter, setCounter] = React.useState<number>(0)
  const increment = () => setCounter((prev) => prev + 1)
  return [counter, increment]
}

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTimer } from '../../redux/timer/selectors'
import { setSeconds } from '../../redux/timer/slice'

import styles from './Timer.module.scss'

export const Timer = () => {
  const dispatch = useDispatch()
  const { seconds } = useSelector(selectTimer)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setSeconds(seconds))
    }, 1000)
    return () => clearInterval(interval)
  }, [seconds])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return (
    <div className={styles.root}>
      <h1 className={styles.timer}>
        {minutes}:{remainingSeconds}
      </h1>
    </div>
  )
}

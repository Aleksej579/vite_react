import React from 'react'
import Recharts from '../components/Recharts'
import DDD from '../components/ddd'
import Chord from '../components/Chord'

function pageRecharts() {
  return (
    <div>
      <h1>Chart</h1>
      <Recharts />
      <hr />
      <Chord />
      <hr />
      <DDD />
    </div>
  )
}

export default pageRecharts

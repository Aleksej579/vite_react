import React from 'react'

import { getXataClient } from "../xata";
const xata = getXataClient();
const page = await xata.db.test.getPaginated();

function Xata() {
  return (
    <div>
      {page.records.map(record => {
        return (
          <p key={record.id}><span>{record.id}</span>: <span>{record.name}</span></p>
        )
      })}
    </div>
  )
}

export default Xata

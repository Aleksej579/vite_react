import React from 'react'

import { getXataClient } from "../xata";
const xata = getXataClient();
const page = await xata.db.test.getPaginated();

function Xata() {
  return (
    <section className='w-3/4 mx-auto'>
      <h3>Load data from Xata</h3>
      {page.records.map(record => {
        return (
          <p key={record.id}><span>{record.id}</span>: <span>{record.name}</span></p>
        )
      })}
    </section>
  )
}

export default Xata

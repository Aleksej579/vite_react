import {React, useEffect, useState} from 'react'
import './dddStyles.css'
import * as d3 from 'd3'

function ddd() {
  const [valueMonday, setValueMonday] = useState();
  const [valueTuesday, setValueTuesday] = useState();
  const [valueWednesday, setValueWednesday] = useState();
  const [valueThursday, setValueThursday] = useState();
  const [valueFriday, setValueFriday] = useState();
  const [valueSaturday, setValueSaturday] = useState();
  const [valueSunday, setValueSunday] = useState();

  useEffect(() => {
    let dataSet = [
      { subject: "Monday", count: valueMonday || 10 },
      { subject: "Tuesday", count: valueTuesday || 40 },
      { subject: "Wednesday", count: valueWednesday || 20 },
      { subject: "Thursday", count: valueThursday || 80 },
      { subject: "Friday", count: valueFriday || 50 },
      { subject: "Saturday", count: valueSaturday || 15 },
      { subject: "Sunday", count: valueSunday || 30 }
    ]
    // chart 1
    // d3.select('#pgraphs').selectAll('p').data(dataSet).enter().append('p').text(dt => dt.subject + ": " + dt.count);

    const getMax = () => {
      let max = 0
      dataSet.forEach((dt) => {
          if(dt.count > max) {max = dt.count}
      })
      return max;
    }
    d3.select('#BarChart')
      .selectAll('div')
      .data(dataSet) 
      .enter()
      .append('div')
      .classed('bar', true)
      .style('height', `${getMax()}px`);

    d3.select('#BarChart')
      .selectAll('.bar')
      .transition().duration(1000)
      .style('height', bar => `${bar.count}px`)
      .style('width', '80px').style('margin-right', '10px')
      .delay(300);

    // chart 2
    let lineData = [];
    for(let i = 0; i < 15; i++) {
      lineData.push({x: i + 1, y: Math.round(Math.random() * 100)});
    }
    let xScale = d3.scaleLinear().domain([0,15]).range([0, 300]);
    let yScale = d3.scaleLinear().domain([0,100]).range([300, 0]);
    let line = d3.line()
      .x(dt => xScale(dt.x))
      .y(dt => yScale(dt.y));
    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);
    d3.select('#LineChart')
      .selectAll('path')
      .datum(lineData)
      .attr('d', d3.line()
      .x(dt => xScale(dt.x))
      .y(yScale(0))).attr("stroke", "red")
      .attr('fill', 'none');
    d3.select('#LineChart')
      .selectAll('path')
      .transition()
      .duration(1000)
      .attr('d', line);
    d3.select('#LineChart')
      .append("g")
      .attr("transform", "translate(0, " + 300 + ")")
      .call(xAxis);
    d3.select('#LineChart')
      .append("g")
      .attr("transform", "translate(0, 0)")
      .call(yAxis);
  })

  return (
    <section className='w-3/4 mx-auto'>
      <fieldset className='flex flex-col'>
        <legend className='font-semibold'>Legend</legend>
        <label className='mb-3'>Monday: 
          <input value={valueMonday} onChange={(event) => setValueMonday(event.target.value)} />
        </label>
        <label className='mb-3'>Tuesday: 
          <input value={valueTuesday} onChange={(event) => setValueTuesday(event.target.value)} />
        </label>
        <label className='mb-3'>Wednesday: 
          <input value={valueWednesday} onChange={(event) => setValueWednesday(event.target.value)} />
        </label>
        <label className='mb-3'>Thursday: 
          <input value={valueThursday} onChange={(event) => setValueThursday(event.target.value)} />
        </label>
        <label className='mb-3'>Friday: 
          <input value={valueFriday} onChange={(event) => setValueFriday(event.target.value)} />
        </label>
        <label className='mb-3'>Saturday: 
          <input value={valueSaturday} onChange={(event) => setValueSaturday(event.target.value)} />
        </label>
        <label className='mb-3'>Sunday: 
          <input value={valueSunday} onChange={(event) => setValueSunday(event.target.value)} />
        </label>
      </fieldset>
      {/* <div id="pgraphs"></div> */}
      <div id="BarChart"></div>
      <svg id="LineChart" width = {300} height = {300}><path/></svg>
    </section>
  )
}

export default ddd
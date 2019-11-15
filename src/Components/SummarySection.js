import React from 'react';
import Total from './Total'
import Summary from './Summary'


export default function SummarySection (props){
  const {selected} = props;

  const summary = Object.keys(selected)
    .map(key =>
      <Summary
        key={key}
        featureTitle={key}
        selected={selected} /> 
    );



  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summary}
      <Total selected={selected} />
    </section>
  );
}
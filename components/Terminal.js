import dynamic from 'next/dynamic';
import React from 'react';

const RealTerminal = dynamic(() => import('./RealTerminal'), {
  ssr: false,
});

export class Terminal extends React.Component {
  render() {
    return <>
      <div>Hi from Terminal</div>
      <RealTerminal/>
    </>
  }
}
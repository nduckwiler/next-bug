import dynamic from 'next/dynamic';

// Dynamically imported component
const Component = dynamic(import('../components/Component'));

export default class Index extends React.Component {
  onRef = (e) => {
    // Bug shown here
    console.log(e);
    console.error('☝️This is not an instance of Component. But maybe can be fixed with React.forwardRef');
  }

  render() {
    return <Component ref={this.onRef}/>;
  }
}

const Child = ({ doSomething, value }) => (
    <div onClick={() => doSomething(value)}>Click Me</div>
  );
  
  class Parent extends React.PureComponent {
    doSomething = (value) => {
      console.log('doSomething called by child with value:', value);
    }
  
    render() {
      const { children } = this.props;
  
      const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { doSomething: this.doSomething })
      );
  
      return <div>{childrenWithProps}</div>
    }
  };
  
  ReactDOM.render(
    <Parent>
      <Child value="1" />
      <Child value="2" />
    </Parent>,
    document.getElementById('container')
  );
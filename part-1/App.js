const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Jack" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
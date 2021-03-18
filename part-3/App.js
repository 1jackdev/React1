const App = () => {
    return (
      <div className="container-fluid col-9">
          <Person name="Joseph" age={14} hobbies={['swimming','climbing','coding']} />
          <Person name="Elmohanad" age={19} hobbies={['swimming','climbing','coding']} />
          <Person name="Jamie" age={25} hobbies={['swimming','climbing','coding']} />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
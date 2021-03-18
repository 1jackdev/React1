const App = () => {
  return (
    <div>
      <Tweet
        name="John Smith"
        username="jsmithy"
        date="03-17-2021"
        message="man, aint react the best?"
      />
      <Tweet
        name="Henry Ford"
        username="thefordguy"
        date="03-17-1895"
        message="making cars is easy..."
      />
      <Tweet
        name="Nikola Tesla"
        username="therealtesla"
        date="03-17-1895"
        message="electricity is boring change my mind"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

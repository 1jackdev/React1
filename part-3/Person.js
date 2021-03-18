const Person = (props) => {
  let message;
  if (props.age < 18) {
    message = "you must be 18";
  } else {
    message = "please go vote!";
  }
  return (
    <div className="card">
      <div className="card-body">
        <p>Learn some information about this person.</p>
        <p>
          Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}
        </p>
        <p>Age: {props.age}</p>
        <p>Message: {message}</p>
        <ul> <u>Hobbies</u>
          {props.hobbies.map((hobbie) => (
            <li key={hobbie}>{hobbie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

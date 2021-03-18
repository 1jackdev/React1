const Tweet = (props) => {
  return <div>
      <h2>{props.username} <span>({props.name})</span></h2>
      <p>{props.message}</p>
      <p>{props.date}</p>
  </div>
};

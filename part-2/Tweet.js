const Tweet = (props) => {
  const tweets = [
    {
      username: "jsmithy",
      name: "John Smith",
      message: "man, aint react the best?",
      date: "03-17-2021",
    },
    {
      username: "thefordguy",
      name: "Henry Ford",
      message: "makings cars is easy...",
      date: "03-16-1903",
    },
    {
      username: "therealtesla",
      name: "Nikola Tesla",
      message: "electricity is so boring.",
      date: "03-15-1896",
    },
  ];
  return (
    <div className="row">
      {tweets.map((tweet) => (
        <div className="card col-sm">
          <div className="card-body">
            <h3 className="card-title">
              {tweet.username} <span>({tweet.name})</span>
            </h3>
            <p className="card-text">{tweet.message}</p>
            <p>{tweet.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

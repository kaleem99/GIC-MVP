const DisplayUserCard = ({cardData}) => {
    return cardData.map((user, id) => {
      return (
        <div className="bg-gray tc dib br4 pa3 ma3 grow bw3 shadow-5 w5 .h5">
          <img alt="images" src={`${user.src ? user.src : ""}/${id}`} />
          <h3>Name: {user.Name}</h3>,<h3>Field: {!user.Field ? user.Field : ""}</h3>,
          {/* <h3>College: {user.College}</h3>, */}
        </div>
      );
    });
};

export default DisplayUserCard;
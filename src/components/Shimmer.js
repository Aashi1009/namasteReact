// Shimmer.js
const Shimmer = () => {
    return (
      <div className="res-container">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div className="res-card shimmer-card" key={index}>
              <div className="shimmer-image"></div>
              <div className="shimmer-text shimmer-text-long"></div>
              <div className="shimmer-text shimmer-text-medium"></div>
              <div className="shimmer-text shimmer-text-short"></div>
              <div className="shimmer-text shimmer-text-short"></div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  
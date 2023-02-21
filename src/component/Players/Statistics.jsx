import "./Players.css";

const Statistics = ({ ...name }) => {
  //   const { ...data } = name;
  const arr = Object.entries(name);
  const veri = arr.map((element) => element[1].map((p) => p)).map((k) => k);

  console.log(veri);

  return (
    <div className="veri">
      <div>{veri}</div>
    </div>
  );
};

export default Statistics;

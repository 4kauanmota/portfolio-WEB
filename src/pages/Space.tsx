import Planet from "../components/molecule/Planet";
import "./Space.scss";

function Space() {
  return (
    <>
      <div className="space">
        <Planet
          size={200}
          planet="https://static.vecteezy.com/system/resources/previews/018/888/749/original/cartoon-planet-icon-png.png"
          description="Planet"
          position={{ right: 0 }}
          link=""
        />
      </div>
    </>
  );
}

export default Space;

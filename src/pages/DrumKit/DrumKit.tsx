import useSound from "use-sound";
import DrumKitButton from "../../components/DrumKitButton";

const DrumKit = () => {
  const [play] = useSound("./sounds/clap.wav");
  return (
    <>
      <DrumKitButton/>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => play}>Clap</button>
    </>
  );
}

export default DrumKit;
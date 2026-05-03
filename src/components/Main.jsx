import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function Main() {
  return (
    <div className="flex justify-center gap-4 mt-12 pt-4 bg-[#e9e5df]">
      <Left className="fixed" />
      <Center />
      <Right />
    </div>
  );
}
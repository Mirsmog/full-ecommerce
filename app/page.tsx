import Checkbox from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <label className="flex items-center gap-1 select-none cursor-pointer">
        <Checkbox />
        <span>Your name</span>
      </label>
    </div>
  );
}

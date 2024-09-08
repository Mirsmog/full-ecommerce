"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <Button variant={"default"}>Button Label</Button>
      <Button variant={"outline"}>Button Label</Button>
      <Button variant={"ghost"}>Button Label</Button>
      <Button
        size={"small"}
        variant={"default"}
        onClick={() =>
          toast.info(
            "I'm very long message because you have made an error in your form so you need to check it and send again",
          )
        }
      >
        Button Label
      </Button>
      <Button
        size={"small"}
        variant={"outline"}
        onClick={() => toast.success("You have successfully logged in")}
      >
        Button Label
      </Button>
      <Button
        size={"small"}
        variant={"ghost"}
        onClick={() => toast.error("Please enter a valid number.")}
      >
        Button Label
      </Button>
    </div>
  );
}

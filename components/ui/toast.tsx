import { AlertTriangle, CircleAlert, CircleCheck } from "lucide-react";
import React from "react";
import { Toaster } from "sonner";

interface IToast {}

const Toast: React.FC<IToast> = ({}) => {
  return (
    <Toaster
      position="top-right"
      className="body-p1-m"
      offset={16}
      expand={true}
      icons={{
        error: <AlertTriangle />,
        success: <CircleCheck />,
        info: <CircleAlert />,
      }}
      closeButton={true}
      toastOptions={{
        duration: 4000,
        className:
          "border-none border-transparent oultine-none pl-4 pr-0 min-h-12 py-0 rounded flex items-center [&>data-[content='']]:hidden",
        classNames: {
          error: "bg-red-200 text-red-700",
          success: "bg-green-200 text-green-700",
          info: "bg-neutral-black text-neutral-white",
          title: "w-full py-3",

          icon: "mr-6",
          closeButton:
            "static order-1 border-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:rounded-full hover:[&>svg]:hover:bg-neutral-white  my-auto hover:!bg-transparent transform-none ml-auto text-neutral-black-500 min-h-12 min-w-12",
        },
      }}
    />
  );
};

export default Toast;

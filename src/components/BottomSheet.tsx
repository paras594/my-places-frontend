import { PropsWithChildren } from "react";

const BottomSheet = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 overflow-clip rounded-t-2xl bg-white"
      style={{
        boxShadow: "0 -6px 8px -4px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default BottomSheet;

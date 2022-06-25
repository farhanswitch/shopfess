import { FC } from "react";

const ToTop: FC = () => (
  <a href="#">
    <div className="to-top bg-blue-500/60 backdrop-blur-lg fixed right-2 bottom-2 rounded-full h-12 w-12 grid place-items-center ">
      <img src="/chevron-up.svg" width="30" height="30" />
    </div>
  </a>
);

export default ToTop;

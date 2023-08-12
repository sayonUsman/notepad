import React from "react";
import { MdDone } from "react-icons/Md";
import { IconContext } from "react-icons";

type Props = {
  todo: string;
};

const CompletedTodoCard: React.FC<Props> = ({ todo }) => {
  return (
    <div className="h-16 flex justify-between items-center rounded-sm border shadow-md shadow-zinc-900 m-7">
      <p className="pl-4 font-semibold">{todo}</p>

      <IconContext.Provider value={{ size: "27" }}>
        <span className="text-green-600 pr-4">
          <MdDone></MdDone>
        </span>
      </IconContext.Provider>
    </div>
  );
};

export default CompletedTodoCard;

"use client";

import CEPInput from "../../atoms/CEPInput";
import LogradouroInput from "../../atoms/LogradouroInput";
import LogradouroTypeSelect from "../../atoms/LogradouroTypeSelect";
import NumberInput from "../../atoms/NumberInput";

const FirstLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CEPInput />
      <LogradouroTypeSelect />
      <LogradouroInput />
      <NumberInput />
    </div>
  );
};

export default FirstLine;

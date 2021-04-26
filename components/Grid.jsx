import * as React from "react";
import GridItem from "./GridItem";
import Button from "./Button";

function Grid({itemlist}) {
  return (
    <>
      <div
        className="flex justify-start flex-wrap
        self-center lg:w-8/12 mx-auto "
      >
        {itemlist.map((item)=><GridItem name={item.name}></GridItem>)}
      </div>
      <div className="w-10/12 mx-auto mt-16">
        <Button text="Prev" />
        <Button text="Next" align="right" />
      </div>
    </>
  );
}

export default Grid;

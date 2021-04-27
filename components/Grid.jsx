import * as React from "react";
import GridItem from "./GridItem";
import Button from "./Button";

function Grid({data:{results}}) {
  return (
    <>
      <div
        className="flex justify-start flex-wrap
        self-center lg:w-8/12 mx-auto "
      >
        {results.map((item)=><GridItem key={item.id} name={item.name} id={item.id} ></GridItem>)}
      </div>
      
    </>
  );
}

export default Grid;

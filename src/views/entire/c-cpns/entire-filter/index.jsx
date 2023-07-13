import React, { memo, useState } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  const filterItemClickHandle = (item) => {
    const newSelectItems = [...selectItems];
    if (selectItems.includes(item)) {
      newSelectItems.splice(
        selectItems.findIndex((currentItem) => currentItem === item),
        1
      );
    } else {
      newSelectItems.push(item);
    }
    setSelectItems(newSelectItems);
  };
  return (
    <EntireFilterWrapper>
      <ul className="filter">
        {filterData.map((item, index) => {
          return (
            <li
              className={`${selectItems.includes(item) ? "active" : ""}`}
              key={index}
              onClick={() => {
                filterItemClickHandle(item);
              }}>
              {item}
            </li>
          );
        })}
      </ul>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;

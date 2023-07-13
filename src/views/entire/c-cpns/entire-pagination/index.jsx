import React, { memo } from "react";
import { EntirePaginationWrapper } from "./style";
import { Pagination } from "@mui/material";

const EntirePagination = memo((props) => {
  const { totalCount, pageChangeHandle } = props;
  return (
    <EntirePaginationWrapper>
      <Pagination
        count={totalCount}
        variant="outlined"
        color="primary"
        onChange={(e, page) => {
          pageChangeHandle(page);
        }}
      />
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;

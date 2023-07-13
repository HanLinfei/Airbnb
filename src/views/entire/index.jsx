import { fetchEntireRoomListAction } from "@/store/modules/entire";
import { isEmptyObject } from "@/utils/isEmptyObject";
import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";
import { changeCurrentPage } from "@/store/modules/entire";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";
const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true }));
    dispatch(fetchEntireRoomListAction());
  }, []);
  const { roomList } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
    };
  }, shallowEqual);
  let totalPage = 0;
  if (isEmptyObject(roomList)) {
    totalPage = Math.ceil(roomList.totalCount / 20);
  }
  const pageChangeHandle = (page) => {
    dispatch(changeCurrentPage(page - 1));
    dispatch(fetchEntireRoomListAction());
    window.scrollTo(0, 0);
  };

  return (
    <EntireWrapper>
      <AppHeader />
      <EntireFilter />
      {isEmptyObject(roomList) && <EntireRooms roomList={roomList} />}
      {isEmptyObject(roomList) && (
        <EntirePagination
          totalCount={totalPage}
          pageChangeHandle={(page) => {
            pageChangeHandle(page);
          }}
        />
      )}
    </EntireWrapper>
  );
});

export default Entire;

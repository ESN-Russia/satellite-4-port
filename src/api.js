import axios from "axios";

const getUrl = uri => `https://us-central1-andresokoldev.cloudfunctions.net/${uri}`;

const apiGet = uri => axios.get(getUrl(uri));

const getMenuItems = async () => {
  await apiGet("getMenuItems").then((res) => {
    console.log("[getMenuItems] Success =", res);
    window.store.dispatch({
      type: "GET_MENU_ITEMS",
      menuItems: res.data,
    });
  });
};

const getAboutPage = async () => {
  await apiGet("getAboutPage").then((res) => {
    console.log("[getAboutPage] Success =", res);
    window.store.dispatch({
      type: "GET_ABOUT",
      about: res.data,
    });
  });
};

const getBoards = async () => {
  await apiGet("getBoards").then((res) => {
    console.log("[getBoards] Success =", res);
    window.store.dispatch({
      type: "GET_BOARDS",
      boards: res.data,
    });
  });
};

const getPages = async () => {
  await apiGet("getPages").then((res) => {
    console.log("[getPages] Success =", res);
    window.store.dispatch({
      type: "GET_PAGES",
      pages: res.data,
    });
  });
};

export default {
  getMenuItems,
  getAboutPage,
  getBoards,
  getPages,
};

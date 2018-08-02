export default {
  contests: {},
  unis: null,
  auth: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null,
    errors: null,
  },
};

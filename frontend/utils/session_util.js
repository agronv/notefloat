export const signUp = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users/",
    data: { user }
  });
};

export const logIn = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
};

export const logOut = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users`
  });
};
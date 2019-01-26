export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks/",
    data: track,
    contentType: false,
    processData: false,
  });
};

export const updateTrack = (id, track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${id}`,
    data: track,
    contentType: false,
    processData: false,
  });
};

export const fetchTrack = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${id}`,
  });
};

export const fetchTracks = () => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/`,
  });
};

export const destroyTrack = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tracks/${id}`,
  });
};

export const fetchRandomTracks = () => {
  return $.ajax({
    method: "GET",
    url: `/api/random_tracks`,
  });
};
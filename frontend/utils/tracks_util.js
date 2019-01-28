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

export const fetchCompleteTrack = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks_complete_show/${id}`,
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

export const fetchRandomTracks = (genre) => {
  return $.ajax({
    method: "GET",
    url: `/api/random_tracks`,
    data: { genre }
  });
};

export const fetchCompleteRandomTracks = () => {
  return $.ajax({
    method: "GET",
    url: `/api/complete_random_tracks`,
  });
};
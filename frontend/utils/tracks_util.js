export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks/",
    data: track,
    content_type: false,
    processData: false,
  });
};

export const updateTrack = (track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`,
    data: track,
    content_type: false,
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
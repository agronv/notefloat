export const createComment = (track_id, comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/tracks/${track_id}/comments`,
    data: { comment }
  });
};

export const destroyComment = (track_id, id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tracks/${track_id}/comments/${id}`, 
  });
};
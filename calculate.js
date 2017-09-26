let revPerPage = 0.045; // guesstimation of google revenue per page

export const adValue = function(revPerPage, frames) {
  return revPerPage / frames;
};

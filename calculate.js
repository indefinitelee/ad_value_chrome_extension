const revPerPage = 0.045; // guesstimation of google revenue per page

const adValue = function(revPerPage, frames) {
  return revPerPage / frames;
};

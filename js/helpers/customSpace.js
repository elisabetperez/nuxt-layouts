export const getSpaceCustom = (space) => {
  var mycustomclass = "";
  if (space) {
      if (space.selected == "top") {
          if (space.top == "small") {
              mycustomclass = "f--pt-7 f--pt-tablets-5";
          } else if (space.top == "medium") {
              mycustomclass = "f--pt-10 f--pt-tablets-7";
          } else if (space.top == "large") {
              mycustomclass = "f--pt-15 f--pt-tablets-10";
          }
      }
      if (space.selected == "bottom") {
          if (space.bottom == "small") {
              mycustomclass = "f--pb-7 f--pb-tablets-5";
          } else if (space.bottom == "medium") {
              mycustomclass = "f--pb-10 f--pb-tablets-7";
          } else if (space.bottom == "large") {
              mycustomclass = "f--pb-15 f--pb-tablets-10";
          }
      }
      if (space.selected == "topbottom") {
          if (space.top == "small") {
              mycustomclass = "f--pt-7 f--pt-tablets-5";
          } else if (space.top == "medium") {
              mycustomclass = "f--pt-10 f--pt-tablets-7";
          } else if (space.top == "large") {
              mycustomclass = "f--pt-15 f--pt-tablets-10";
          }
          if (space.bottom == "small") {
              mycustomclass += " f--pb-7 f--pb-tablets-5";
          } else if (space.bottom == "medium") {
              mycustomclass += " f--pb-10 f--pb-tablets-7";
          } else if (space.bottom == "large") {
              mycustomclass += " f--pb-15 f--pb-tablets-10";
          }
      }
  }

  return mycustomclass;
};
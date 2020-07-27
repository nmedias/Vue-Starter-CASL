import { Role } from "../role";

export const defineRulesByUserRole = {
  [Role.ADMIN]: ADMIN,
  [Role.MANAGER]: MANAGER,
  [Role.DEVELOPER]: DEVELOPER,
  [Role.DESIGNER]: DESIGNER
};

//ADMINS
function ADMIN(user, { can }) {
  can("read");
  can("update");
}

//MANAGER
function MANAGER(user, { can }) {
  can("read", "ManagerVIEW");

  can("read", "ManagerPostType");
  can("update", "ManagerPostType", { authorID: user.id });
}

//DEVELOPER

function DEVELOPER(user, { can }) {
  //string or number
  can("read", "UserProfileVIEW", { id: user.id });
  can("read", "UserProfileVIEW", { id: user.id.toString() });

  can("read", "DeveloperPostType");
  can("update", "DeveloperPostType", { authorID: user.id });
}

//DESIGNER
function DESIGNER(user, { can }) {
  //string or number
  can("read", "UserProfileVIEW", { id: user.id });
  can("read", "UserProfileVIEW", { id: user.id.toString() });

  can("read", "DesignerPostType");
  can("update", "DesignerPostType", { authorID: user.id });
}

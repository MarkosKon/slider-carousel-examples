import "./common";
import sal from "sal.js";

export const onInitialClientRender = () => {
  // RevealExample will call this on mount.
  //
  // I don't import it there because Gatsby
  // throws an error (only with the import,
  // without calling it).
  if (!window.sal) window.sal = sal;
};

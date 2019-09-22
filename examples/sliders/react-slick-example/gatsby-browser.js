import "./common";
import sal from "sal.js";

export const onInitialClientRender = () => {
  sal({ once: false });
};

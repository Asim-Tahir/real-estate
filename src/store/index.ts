import { createStore } from "vuex";

import { agents, appointments, contacts } from "./modules";

export default createStore({
  modules: {
    agents,
    contacts,
    appointments,
  },
});

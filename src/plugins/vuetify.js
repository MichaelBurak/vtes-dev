import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: colors.blueGrey.lighten5,
    secondary: colors.teal.darken3,
    accent: colors.deepOrange.darken3
  },
  options: {
    customProperties: true
  }
});

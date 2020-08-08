const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        // In comments, the original names in Figma.
        // I changed them to be more abstract
        "background-primary-color": "#FFFFFF", //WHITE
        "background-secondary-color": "#85C7D3", //SOFT GREEN
        "background-third-color": "#F3F9FB", //#F3F9FB
        "font-primary-color": "#273029", //BLACK
        "font-secondary-color": "#888888", //GREY
        "call-to-action-color": "#F2994A", //orange
        "outline-color": "#F1F1F1", //OUTLINE
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "1.875rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderColor: ["group-hover"],
  },
  plugins: [
    plugin(function ({ addUtilities, config}) {
      const rotateUtilities = _.map(config("theme.colors"), (value, key) => {
        return {
          [`.fade-out-${key}::after`]: {
            content: "",
            width: "100%",
            height: "100%",
            position: "absolute",
            background: `linear-gradient(${value}94, ${value})`,
          },
        };
      });
      addUtilities(rotateUtilities);
    }),
  ],
};

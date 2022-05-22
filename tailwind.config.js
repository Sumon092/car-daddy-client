module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#06113C",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "background": "#F0F0F0",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FDB819",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

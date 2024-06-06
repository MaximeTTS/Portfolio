import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        snowWhite: "#F2F5F8",
        flashWhite: "#F0F2F5",
        platinum: "#E8E8E8",
        colorGray: "#999999",
        colorSilver: "#707070",
        themeColor: "#00bc91",
        themeHoverColor: "#069c7a",
        power__black: "#18191a",
        nightBlack: "#212223",
        metalBlack: "#2d2e2f",
        lightOrange: "#ffb657",
        greyBlack: "#434445",
        greyBlack200: "#333333",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 188, 145, 0.1)",
        customHover: "0 8px 15px rgba(6, 156, 122, 0.3)",
      },
      maxWidth: {
        "406px": "406px",
      },
      width: {
        "406px": "406px",
        "1/3.5": "28.5714286%",
      },
      gridTemplateAreas: {
        "custom-layout": ["one one one one", "two two three three", "four four four four"],
      },
      gridArea: {
        one: "one",
        two: "two",
        three: "three",
        four: "four",
      },
      rotate: {
        "-30": "-30deg",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "1px black",
          "text-stroke": "1px black",
        },
        ".text-transparent": {
          color: "transparent",
        },
        ".text-black-stroke": {
          "-webkit-text-stroke": "2px #00bc91",
          "text-stroke": "1px #000",
        },
        // Custom utilities for grid-template-areas
        ".grid-template-areas-custom": {
          "grid-template-areas": `
            "one one one one"
            "two two three three"
            "four four four four"
          `,
        },
        ".grid-area-one": {
          "grid-area": "one",
        },
        ".grid-area-two": {
          "grid-area": "two",
        },
        ".grid-area-three": {
          "grid-area": "three",
        },
        ".grid-area-four": {
          "grid-area": "four",
        },
        ".blur-extra-sm": {
          filter: "blur(1px)",
        },
        ".transform-20": {
          transform: "translateZ(20px)",
        },
        ".transform-50": {
          transform: "translateZ(50px)",
        },
      };

      addUtilities(newUtilities, {
        respectPrefix: true,
        respectImportant: true,
      });
    }),
  ],
};

export default config;

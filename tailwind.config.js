module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'recipe-bg': "url('/assets/recipe_bg.svg')",
       },
      backgroundPosition: {
        'recipe-bg-position': "left 10% top -10%",
      },
      colors: {
        'primary': '#6CC57C',
        'secondary': '#F2F6FF',
        'accent': '#23233C',
        'accent-2': '#EE6A6E',
        'muted': '#7F8DA0',
        'tertiary': '#3A466D'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '8rem': '8rem'
      },
      maxWidth: {
        'smartphone': '480px', //Smartphones
        'ipads': '1024px', //Ipads
      },
      screens: {
        'mq-smartphone-pl': {'min-device-width': '320px', 'max-device-width': '480px'}, //Smartphones (portrait and landscape)
        'mq-smartphone-l': { 'min': '321px', 'orientation': 'landscape' }, //Smartphones (landscape)
        'mq-smartphone-p': {'max': '320px', 'orientation': 'portrait'}, //Smartphones (portrait)
        'mq-ipads': {'min-device-width': '768px', 'max-device-width': '1024px'}, //iPads (portrait and landscape)
        'mq-ipads-l': {'min-device-width': '768px', 'max-device-width': '1024px', 'orientation': 'landscape'}, //iPads (landscape)
        'mq-ipads-p': {'min-device-width': '768px', 'max-device-width': '1024px', 'orientation': 'portrait'}, //iPads (portrait)
        'mq-ipad3-l': {'min-device-width': '768px', 'max-device-width': '1024px', 'orientation': 'landscape', '-webkit-min-device-pixel-ratio': '2'}, //iPad 3 Landscape
        'mq-ipad3-p': {'min-device-width': '768px', 'max-device-width': '1024px', 'orientation': 'portrait', '-webkit-min-device-pixel-ratio': '2'}, //iPad 3 Portrait
        'mq-laptop/desktop': {'min-width': '1224px'}, //Laptops and Desktops
        'mq-larger': {'min-width': '1824px'}, //Larger screens
        'mq-iphone4-l': { raw: "only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2)" }, //iPhone 4 Landscape
        'mq-iphone4-p': { raw: "only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2)"}, //iPhone 4 Portrait
        'mq-iphone5-l': { raw: "only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2)"}, //iPhone 5 Landscape
        'mq-iphone5-p': { raw: "only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2)"}, //iPhone 5 Portrait
        'mq-iphone678-l': { raw: "only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2)"}, //iPhone 6,7,8 Landscape
        'mq-iphone678-p': { raw: "only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2)"}, //iPhone 6,7,8 Portrait
        'mq-iphone678plus-l': { raw: "only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2)"}, //iPhone 6+,7+,8+ Landscape
        'mq-iphone678plus-p': { raw: "only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2)"}, //iPhone 6+,7+,8+ Portrait
        'mq-iphonex-l': { raw: "only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3)"}, //iPhone X Landscape
        'mq-iphonex-p': { raw: "only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3)"}, //iPhone X Portrait
        'mq-iphonexsmax/xr-l': { raw: "only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3)"}, //iPhone XS Max, XR Landscape
        'mq-iphonexsmax/xr-p': { raw: "only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3)"}, //iPhone XS Max, XR Portrait
        'mq-samsunggalaxys3-l': { raw: "only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2)"}, //Samsung Galaxy S3 Landscape
        'mq-samsunggalaxys3-p': { raw: "only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2)"}, //Samsung Galaxy S3 Portrait
        'mq-samsunggalaxys4-l': { raw: "only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3)"}, //Samsung Galaxy S4 Landscape
        'mq-samsunggalaxys4-p': { raw: "only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3)"}, //Samsung Galaxy S4 Portrait,
        'mq-samsunggalaxys5-l': { raw: "only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3)"}, //Samsung Galaxy S5 Landscape
        'mq-samsunggalaxys5-p': { raw: "only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3)"}, //Samsung Galaxy S5 Portrait
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

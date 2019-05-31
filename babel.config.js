module.exports = {
    overrides: [
      {
        test: "*",
        presets: [["@babel/preset-env", { node: "current" }]]
      }
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          absoluteRuntime: false,
          corejs: 2,
          helpers: true,
          regenerator: true,
          useESModules: false
        },
        "@babel/runtime-corejs2",
      ]
    ]
  };
  
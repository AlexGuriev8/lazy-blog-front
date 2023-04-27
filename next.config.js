/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

module.exports = removeImports({
  experimental: {
    appDir: true,
    esmExternals: "loose",
  },
});

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // La siguiente línea es la que debes modificar
  transformIgnorePatterns: ['/node_modules/(?!(vue-axios)/)'],
};
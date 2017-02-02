/**
 * Bootstrap configuration for bootstrap-sass-loader
 *
 * Scripts are disabled to not load jQuery.
 * If you depend on Bootstrap scripts consider react-bootstrap instead.
 * https://github.com/react-bootstrap/react-bootstrap
 *
 * In order to keep the bundle size low in production
 * disable components you don't use.
 *
 */

module.exports = {
  preBootstrapCustomizations: './src/theme/variables.scss',
  mainSass: './src/theme/bootstrap.overrides.scss',
  verbose: false,
  debug: false,
  scripts: {
    transition: false,
    alert: false,
    button: false,
    carousel: false,
    collapse: false,
    dropdown: false,
    modal: false,
    tooltip: false,
    popover: false,
    scrollspy: false,
    tab: false,
    affix: false
  },
  styles: {
    mixins: true,
    normalize: true,
    print: true,
    glyphicons: false,
    scaffolding: true,
    type: true,
    code: false,
    grid: true,
    tables: false,
    forms: true,
    buttons: true,
    'component-animations': false,
    dropdowns: true,
    'button-groups': true,
    'input-groups': true,
    navs: true,
    navbar: true,
    breadcrumbs: true,
    pagination: true,
    pager: true,
    labels: true,
    badges: true,
    jumbotron: false,
    thumbnails: false,
    alerts: true,
    'progress-bars': false,
    media: false,
    'list-group': false,
    panels: false,
    wells: false,
    'responsive-embed': false,
    close: false,
    modals: true,
    tooltip: false,
    popovers: false,
    carousel: false,
    utilities: true,
    'responsive-utilities': true
  }
};

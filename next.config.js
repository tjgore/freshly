const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    /**
     * Used with npm run export 
     */
    //target: 'serverless',
    /* exportPathMap: function() {
        const paths = {
          '/': { page: '/' },
          '/why': { page: '/why' },
          '/about': { page: '/about' },
        };
        
        return paths;
      } */
})

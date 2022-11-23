module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets/images")
    eleventyConfig.addPassthroughCopy("src/assets/css")
    
    eleventyConfig.addWatchTarget("src/assets/css")

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'public'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}
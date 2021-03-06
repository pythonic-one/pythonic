function initPagedown() {
	var converter = Markdown.getSanitizingConverter(),
        elements = document.getElementsByTagName("textarea");
//	var Showdown = require('showdown');
//	var converter = new Showdown.converter();
//	var elements = document.getElementsByTagName("textarea");

	converter.makeHtml('#hello markdown!');
	
    for (var i = 0; i < elements.length; ++i){
        var el = elements[i];
        if ( (' ' + el.className + ' ').indexOf(' wmd-input ') > -1 ) {
            selectors = {
                input : el.id,
                button : el.id + "_wmd_button_bar",
                preview : el.id + "_wmd_preview",
                helpButton : true,
            };
            var editor = new Markdown.Editor(converter, "", selectors);
            editor.run();
        }
    }
}
window.onload = initPagedown; 
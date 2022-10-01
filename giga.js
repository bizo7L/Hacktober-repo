const util = require('./util')

var GigaFyde = util.getFirstName(args);
var rep = 0;

if (!GigaFyde) return;

function amazing(name) {

	if (name === "amazing") {
		return rep +1;
	} else {
		return rep -1;
	}
}

amazing(GigaFyde);

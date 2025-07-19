const Logger = function () {
	this.map = new Map();
};

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
	if (!this.map.get(message) || this.map.get(message) <= timestamp) {
		this.map.set(message, timestamp + 10);
		return true;
	}
	return false;
};

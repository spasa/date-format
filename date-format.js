(function() {

	var dayNamesInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  	var shortDayNamessInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	Date.prototype.format = function(format) {
		var pattern = '',
			returnValue = '',
			count = 0;

		for(var i = 0; i < format.length; i++) {
			var currentPattern = format.charAt(i);
            var nextPattern = format.charAt(i + 1);

            pattern += currentPattern;
            switch (pattern) {
            	//day
            	case 'd':
            		count++;
	            	if(nextPattern === 'd') {
	            		if (this.getDate() < 10) {
	            			if (count >= 1) {
	            				returnValue += '0';
	            			}
	            		} else {
	            			if (count > 1) {
	            				returnValue += '0';
	            			}
	            		}
	            		pattern = '';
	            		break;
	            	}
	            	returnValue += this.getDate();
	            	pattern = '';
	            	count = 0;
	            	break;
	            case 'D':
		            var start = new Date(this.getFullYear(), 0, 0);
		            var diff = this - start;
		            var oneDay = 1000 * 60 * 60 * 24;
	            	returnValue += Math.ceil(diff / oneDay);
	            	pattern = '';
	            	break;
	            case 'F':
	            	count++;
	            	if(nextPattern === 'F') {
	            		if (count >= 1) {
	            			returnValue += '0';
	            		}
	            		pattern = '';
	            		break;
	            	}
	            	var d = new Date(this.valueOf()), 
	            		dayOfWeekInMonth = 0,
	            		month = this.getMonth();

	            	while (d.getMonth() === month) {
	            		dayOfWeekInMonth++;
	            		d.setDate(d.getDate() - 7);
	            	}

	            	returnValue += dayOfWeekInMonth;
	            	pattern = '';
	            	count = 0;
	            	break;
	            case 'E':
            		count++;
	            	if(nextPattern === 'E') {
	            		pattern = '';
	            		break;
	            	}
	            	if (count > 3) {
	            		returnValue += dayNamesInWeek[this.getDay()];
	            	} else {
	            		returnValue += shortDayNamessInWeek[this.getDay()];
	            	}
	            	pattern = '';
	            	count = 0;
	            	break;
	            case 'u':
            		count++;
	            	if(nextPattern === 'u') {
	            		if (count >= 1) {
	            			returnValue += '0';
	            		}
	            		pattern = '';
	            		break;
	            	}
	            	if (this.getDay() == 0) {
	            		returnValue += 7;
	            	} else {
	            		returnValue += this.getDay();
	            	}
	            	pattern = '';
	            	count = 0;
	            	break;
            	default:
	            	returnValue += currentPattern;
	            	pattern = '';
	            	break;
            }
        }
        return returnValue;
    };

}).call(this);
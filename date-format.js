(function() {

	/*var dayNamesInWeek = locale.dayNamesInWeek;
	var shortDayNamessInWeek = locale.shortDayNamessInWeek;
	var months = locale.months;
	var shortMonths = locale.shortMonths;*/
	var dayNamesInWeek;
	var shortDayNamessInWeek;
	var months;
	var shortMonths;
	var defaultLocale = 'en';

	Date.prototype.setLocale = function(lang) {
		if (window[lang]) {
			dayNamesInWeek = window[lang].dayNamesInWeek;
			shortDayNamessInWeek = window[lang].shortDayNamessInWeek;
			months = window[lang].months;
			shortMonths = window[lang].shortMonths;
		} else {
			dayNamesInWeek = window[defaultLocale].dayNamesInWeek;
			shortDayNamessInWeek = window[defaultLocale].shortDayNamessInWeek;
			months = window[defaultLocale].months;
			shortMonths = window[defaultLocale].shortMonths;
		}
	}

	Date.prototype.format = function(format) {
		var pattern = '',
			returnValue = '',
			count = 0;

		if (!dayNamesInWeek || !shortDayNamessInWeek || !months || !shortMonths) {
			this.setLocale(defaultLocale);
		}
		
		for(var i = 0; i < format.length; i++) {
			var currentPattern = format.charAt(i);
			var nextPattern = format.charAt(i + 1);

			pattern += currentPattern;
			switch (pattern) {
				//year
				case 'y':
					count++;
					if(nextPattern === 'y') {
						pattern = '';
						break;
					}
					if (count == 2) {
						returnValue += ('' + this.getFullYear()).substr(2);
					} else {
						returnValue += this.getFullYear();
					}
					pattern = '';
					count = 0;
					break;

				//month
				case 'M':
					count++;
					if(nextPattern === 'M') {
						pattern = '';
						break;
					}
					if (count < 3) {
						if (this.getMonth() < 9 && count > 1) {
							returnValue += '0';
						} 
						returnValue += (this.getMonth() + 1);
					} else if (count == 3) {
						returnValue += shortMonths[this.getMonth()];
					} else {
						returnValue += months[this.getMonth()];
					}
					pattern = '';
					count = 0;
					break;
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
				//time
				case 'a':
					if(nextPattern === 'a') {
						pattern = '';
						break;
					}
					if (this.getHours() < 12) {
						returnValue += 'AM';
					} else {
						returnValue += 'PM';
					}
					pattern = '';
					count = 0;
					break;
				case 'H':
					count++;
					if(nextPattern === 'H') {
						if (this.getHours() < 10) {
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
					returnValue += this.getHours();
					pattern = '';
					count = 0;
					break;
				case 'k':
					count++;
					if(nextPattern === 'k') {
						if (this.getHours() < 10) {
							if (!(count == 1 && this.getHours() == 0)) {
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
					if (this.getHours() == 0) {
						returnValue += 24;
					} else {
						returnValue += this.getHours();
					}
					pattern = '';
					count = 0;
					break;
				case 'K':
					count++;
					if(nextPattern === 'K') {
						if (this.getHours() % 12 < 10) {
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
					returnValue += this.getHours() % 12;
					pattern = '';
					count = 0;
					break;
				case 'h':
					count++;
					if(nextPattern === 'h') {
						if ((this.getHours() % 12 || 12) < 10) {
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
					returnValue += (this.getHours() % 12 || 12);
					pattern = '';
					count = 0;
					break;
				case 'm':
					count++;
					if(nextPattern === 'm') {
						if (this.getMinutes() < 10) {
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
					returnValue += this.getMinutes();
					pattern = '';
					count = 0;
					break;
				case 's':
					count++;
					if(nextPattern === 's') {
						if (this.getSeconds() < 10) {
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
					returnValue += this.getSeconds();
					pattern = '';
					count = 0;
					break;
				case 'S':
					count++;
					if(nextPattern === 'S') {
						if (this.getMilliseconds() < 10) {
							if (count >= 1) {
								returnValue += '0';
							}
						} else if (this.getMilliseconds() < 100) {
							if (count >= 2) {
								returnValue += '0';
							}
						} else {
							if (count > 2) {
								returnValue += '0';
							}
						}
						pattern = '';
						break;
					}
					returnValue += this.getMilliseconds();
					pattern = '';
					count = 0;
					break;
				case 'Z':
					if(nextPattern === 'Z') {
						pattern = '';
						break;
					}
					returnValue += (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + Math.floor(Math.abs(this.getTimezoneOffset() / 60));
					if (Math.abs(this.getTimezoneOffset() % 60) == 0){
						returnValue += '00';
					} else {
						if (Math.abs(this.getTimezoneOffset() % 60) < 10) {
							returnValue += '0';
						}
						returnValue += (Math.abs(this.getTimezoneOffset() % 60));
					}
					pattern = '';
					count = 0;
					break;
				case 'X':
					count++;
					if(nextPattern === 'X') {
						pattern = '';
						break;
					}
					if (count == 1) {
						returnValue += (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + Math.floor(Math.abs(this.getTimezoneOffset() / 60));
					} else if (count == 2) {
						returnValue += this.format('Z');
					} else {
						returnValue += (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + Math.floor(Math.abs(this.getTimezoneOffset() / 60)) + ':';
						if (Math.abs(this.getTimezoneOffset() % 60) == 0){
							returnValue += '00';
						} else {
							if (Math.abs(this.getTimezoneOffset() % 60) < 10) {
								returnValue += '0';
							}
							returnValue += (Math.abs(this.getTimezoneOffset() % 60));
						}
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
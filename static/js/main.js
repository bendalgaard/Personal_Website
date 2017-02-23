var easter_egg = new Konami(function() {
	$("#snippets-nav").removeClass('hide');
	$("#flashcards-nav").removeClass('hide');
});

/**
test1 = courseTermSorter('Spring 2015', 'Spring 2015') ==> 0
test2 = courseTermSorter('Spring 2014', 'Spring 2015') ==> -1
test3 = courseTermSorter('Spring 2015', 'Spring 2014') ==> 1
test4 = courseTermSorter('Winter 2015', 'Spring 2015') ==> -1
test5 = courseTermSorter('Spring 2015', 'Winter 2015') ==> 1
*/
function courseTermSorter(a, b) {
	function pickTerm(x) {
		switch(x) {
		  case "Winter":
				return 10;
				break;
		  case "Spring":
				return 20;
				break;
			case "Spring1":
				return 21;
				break;
			case "Spring2":
				return 22;
				break;
			case "Summer1":
				return 30;
				break;
			case "Summer":
				return 40;
				break;
			case "Summer2":
				return 50;
				break;
			case "Fall":
				return 60;
				break;
		    default:
				return 0;
		}
	};
	var arrayA = a.split(' ');
	var arrayB = b.split(' ');
	if (arrayA.length == 2 && arrayB.length == 2) {
		var yearA = arrayA[1];
		var yearB = arrayB[1];
		if (yearA > yearB) {
			return 1;
		} else if (yearA < yearB) {
			return -1;
		} else {
			//Years are the same, compare seasons
			var termA = pickTerm(arrayA[0]);
			var termB = pickTerm(arrayB[0]);
			if (termA > termB) {
				return 1;
			} else if (termA < termB) {
				return -1;
			}
		}
	}

    return 0;
}

$(function () {

	// Pega load transition

	$("body").fadeIn(600);

	$("nav a").click(function (event) {
		event.preventDefault();
		var linkLocation = this.href;
		console.log(linkLocation)
		$("body").fadeOut(400, redirectPage(linkLocation));
	});

	function redirectPage(linkLocation) {
		window.location = linkLocation;
	}

	// Swiping pages

	$("main").on('swipeleft', function () {
		var menuItemsLength = $("nav a").length,
			currentPage = $("nav .current"),
			currentPageHref = currentPage.attr("href"),
			currentPageIndex = currentPage.index() + 1,
			nextLink = currentPage.next('a').attr("href");

		if (currentPageIndex < menuItemsLength && nextLink) {
			redirectPage(nextLink);
		}
	})

	$("main").on('swiperight', function () {
		var menuItemsLength = $("nav a").length,
			currentPage = $("nav .current"),
			currentPageHref = currentPage.attr("href"),
			currentPageIndex = currentPage.index() + 1,
			prevLink = currentPage.prev('a').attr("href");

		if (currentPageIndex > 1 && prevLink) {
			redirectPage(prevLink);
		}
	})

	// Back button

	$(".arrow-back").on('click', function () {
		history.back();
	})


	// Responsive table

	function tableResponsive() {
		$('table.responsive').each(function () {
			var $tableTr = $('tr', this);
			var $tableTh = $('th', this);
			var allHeadersSaved = new Array();

			$tableTh.each(function () {
				var headerContent = $(this).text();
				allHeadersSaved.push(headerContent);
			});

			$.each(allHeadersSaved, function (i, v) {
				$tableTr.find('td:eq(' + i + ')').prepend('<span class="table-head">' + v + '</span>');
			});
		});
	}

	if ($("table.responsive").length > -1 && window.innerWidth <= 768) {
		tableResponsive();

		$("table.responsive tr:not(heading-row) > td:first-child").on('click', function () {
			$(this).siblings("td").toggleClass("block");
		})
	}



});
(function() {
    var tableRows = '';
    var bestOffer = ' class="bestOffer"';
    $.ajax({
        url: "code-test.json",
        dataType: "json", 
        success: function(result) {
            result.sort(function(a, b) {
                return parseFloat(b.apy) - parseFloat(a.apy);
            });
            for (var i = 0; i < result.length; i++) {
                if (i > 0) {
                    bestOffer = '';
                }
                tableRows += 
                    "<tr" + bestOffer + "><td>" + 
                    result[i].name +
                    "</td><td>" +
                    result[i].apy +
                    "</td><td>" +
                    result[i].earnings +
                    "</td></tr>";
            }
            $(".rate-table table tbody").append(tableRows);
        }
    });
})();
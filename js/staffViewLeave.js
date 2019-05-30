function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}
$(document).ready(function() {
    var data = [["City 1", "City 2", "City 3"], //headers
                ["New York", "LA", "Seattle"], 
                ["Paris", "Milan", "Rome"], 
                ["Pittsburg", "Wichita", "Boise"]]
    var cityTable = makeTable($(document.body), data);
});
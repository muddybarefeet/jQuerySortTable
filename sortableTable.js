/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {

  $('th').on('click', function (element) {

    var colHeader = element.target.innerHTML;
    var colIndex = $('th').index(this);

    var rows = $('tbody').find('tr');

    //loop through the rows and return a new order of rows
    rows = rows.sort(function (a,b) {

      if ( !isNaN( parseFloat(a.children[colIndex].innerHTML) ) && !a.children[colIndex].innerHTML.match(/-/ig) ) {
        //if number
        console.log('number sort');
        return parseFloat(a.children[colIndex].innerHTML) - parseFloat(b.children[colIndex].innerHTML);

      } else if ( !isNaN(Date.parse(a.children[colIndex].innerHTML)) ) {
        console.log('date sort');
        
        return Date.parse(a.children[colIndex].innerHTML) - Date.parse(b.children[colIndex].innerHTML);

      } else {

        if (a.children[colIndex].innerHTML === b.children[colIndex].innerHTML) return 0;
        if (a.children[colIndex].innerHTML < b.children[colIndex].innerHTML) return -1;
        if (a.children[colIndex].innerHTML > b.children[colIndex].innerHTML) return 1;

      }

    });

    //reset the tbody html
    $('tbody').html(rows);

  });

});
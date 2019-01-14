function show() {
    var amount = document.getElementById('amount').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    if (from == 'foot' && to == 'metter') {
        var area = amount * 0.305;
        alert(area);
    } else {
        var area = amount * 3.279;
        alert(area);
    }
}
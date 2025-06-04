var singleNumber = function (nums) {
    var no_duplicate_list = [];
    for (var i of nums) {
        if (!no_duplicate_list.includes(i)) {
            no_duplicate_list.push(i);
        } else {
            no_duplicate_list.splice(no_duplicate_list.indexOf(i), 1);
        }
    }
    return no_duplicate_list[0];
};

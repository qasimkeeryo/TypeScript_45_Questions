var current_users = ['Qasim', 'Mahad', 'Taha', 'Hammad', 'Abubakar'];
var new_users = ['Zain', 'QASIM', 'Hassan', 'Ahmed', 'Ali'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    var new_user_lower = user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log("The username '".concat(user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(user, "' is available."));
    }
}

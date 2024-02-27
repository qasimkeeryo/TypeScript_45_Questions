let current_users: string[] = ['Qasim', 'Mahad', 'Taha', 'Hammad', 'Abubakar'];

let new_users: string[] = ['Zain', 'QASIM', 'Hassan', 'Ahmed', 'Ali'];

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let user of new_users) {
    let new_user_lower = user.toLowerCase();

    if (current_users_lower.includes(new_user_lower)) {
        console.log(`The username '${user}' is not available. Please enter a new username.`);
    } 
    else {
        console.log(`The username '${user}' is available.`);
    }
}
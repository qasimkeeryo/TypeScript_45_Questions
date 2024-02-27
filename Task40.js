function make_album(artist, title, tracks) {
    var album = {
        'artist': artist,
        'title': title
    };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
var album1 = make_album('Artist-A', 'Album1');
var album2 = make_album('Artist-B', 'Album2', 12);
var album3 = make_album('Artist-C', 'Album3');
console.log(album1);
console.log(album2);
console.log(album3);

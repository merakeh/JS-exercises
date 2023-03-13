function solve(songsList) {
    let songsObjectList = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = Number(songsList[0]);
    let lengthSongsList = songsList.length;
    let lastElement = songsList[songsList.length - 1];

    for (let i = 1; i < lengthSongsList - 1; i++) {
        let [ typeList, name, time ] = songsList[i].split('_')
        songsObjectList.push(new Song(typeList, name, time));
    }

    for (const song of songsObjectList) {
        if (lastElement === "all") {
            console.log(song.name);
        } else if (lastElement === song.typeList) {
            console.log(song.name)
        }
    }
}


// solve([
//     4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);

solve([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
const fs = require('fs');
let chirps = { nextid: 0 };

if (fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

let getChirps = () => {
    let chirpsArray = [];
    for (let i = 0; i < chirps.nextid; i++) {
        console.log(chirps.nextid)
        let c = chirps[String(i)];
        if (c) {
            chirpsArray.push(Object.assign({}, c, { id: i }));
        }
    }
    return chirpsArray;
}

let getChirp = id => {
    return Object.assign({}, chirps[id]); //create a copy and return it
}

let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}
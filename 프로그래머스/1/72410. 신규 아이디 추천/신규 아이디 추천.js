function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9._-]/g, '');

    let compressedId = '';
    for (let i = 0; i < new_id.length; i++) {
        if (new_id[i] !== '.' || compressedId[compressedId.length - 1] !== '.') {
            compressedId += new_id[i];
        }
    }
    new_id = compressedId;

    if (new_id.charAt(0) === '.') {
        new_id = new_id.slice(1);
    }
    if (new_id.charAt(new_id.length - 1) === '.') {
        new_id = new_id.slice(0, new_id.length - 1);
    }

    if (new_id === '') {
        new_id = 'a';
    }

    if (new_id.length > 15) {
        new_id = new_id.slice(0, 15);
        
        if (new_id.charAt(new_id.length - 1) === '.') {
            new_id = new_id.slice(0, new_id.length - 1);
        }
    }

    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}

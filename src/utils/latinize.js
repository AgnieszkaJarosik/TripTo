const Latinize = {
  latinize (word) {
    const latin_map = {
        "Ą": "A",
        "ą": "a",
        "Ċ": "C",
        "ć": "c",
        "Ę": "E",
        "ę": "e",
        "Ɫ": "L",
        "ł": "l",
        "Ṅ": "N",
        "ń": "n",
        "Ó": "O",
        "ó": "o",
        "Ś": "S",
        "ś": "s",
        "Ź": "Z",
        "ź": "z",
        "Ż": "Z",
        "ż": "z"
    };

    return word.replace(/[^A-Za-z0-9\[\] ]/g, (a) => latin_map[a]||a )
  }
}

module.exports = Latinize;
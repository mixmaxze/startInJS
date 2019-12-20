function removeVowels(str) {
    return str.replace(/[aeiouà-ú]/gi, "") //faltava o gi (global) para remover todos
}
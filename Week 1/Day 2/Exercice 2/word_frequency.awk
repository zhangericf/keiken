{
    for (i = 1; i <= NF; i++) {
        wordFreq[$i]++;
    }
}

END {
    for (word in wordFreq) {
        printf("%s %d\n", word, wordFreq[word]);
    }
}
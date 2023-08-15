BEGIN {
    target_string = "Hello";
    count = 0;
}

{
    for (i = 1; i <= NF; i++) {
        if ($i ~ target_string) {
            count++;
        }
    }
    lines[NR] = $0;
}

END {
    printf("Number of repetitions of '%s': %d\n", target_string, count);

    print "\nReverse Specific string"
    for (i = length; i > 0; i--) printf("%s", substr(target_string, i, 1)); printf("\n")

    print "\nReverse String List"
    for (i = NR; i >= 1; i--) {
        print lines[i];
    }
}

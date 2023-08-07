package com.codurance.srp;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.MessageFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.atomic.AtomicInteger;

import static java.util.stream.Collectors.toCollection;

public class Console {
    private TransactionRepository transactionRepository;
    private static final String STATEMENT_HEADER = "DATE | AMOUNT | BALANCE";
    private static final String AMOUNT_FORMAT = "#.00";  public void printLine(String line) {
        System.out.println(line);
    }
    public void printHeader() {
        printLine(STATEMENT_HEADER);
    }

    public void printTransactions() {
        List<Transaction> transactions = transactionRepository.all();
        final AtomicInteger balance = new AtomicInteger(0);
        transactions.stream()
                .map(transaction -> statementLine(transaction, balance.addAndGet(transaction.amount())))
                .collect(toCollection(LinkedList::new))
                .descendingIterator()
                .forEachRemaining(this::printLine);
    }

    private String statementLine(Transaction transaction, int balance) {
        return MessageFormat.format("{0} | {1} | {2}", formatDate(transaction.date()), formatNumber(transaction.amount()), formatNumber(balance));
    }

    private String formatDate(LocalDate date) {
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern(Clock.DATE_FORMAT);
        return dateFormatter.format(date);
    }

    private String formatNumber(int amount) {
        DecimalFormat decimalFormat = new DecimalFormat(AMOUNT_FORMAT, DecimalFormatSymbols.getInstance(Locale.UK));
        return decimalFormat.format(amount);
    }
}

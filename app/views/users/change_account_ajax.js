$("#history_of_transactions").html("<%= escape_javascript(render('transactions/transaction_history')) %>")
$("#account_list").html("<%= escape_javascript(render('shared/account_list')) %>")
$("#account_balance").html("<%= escape_javascript(render('shared/account_balance')) %>")
$("#date_account").html("<%= escape_javascript(render('shared/date_account')) %>")

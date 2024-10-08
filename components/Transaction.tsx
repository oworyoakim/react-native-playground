import {View, Text, StyleSheet} from "react-native";
import {Icon} from "./Icon";

const transactionTypeIcon = (transactionType: string) => {
    if (transactionType === 'Deposit') {
        return 'arrow-forward';
    }
    if (transactionType === 'Liquidation') {
        return 'arrow-back';
    }
    return 'arrow-back';
};

const transactionTypeColor = (transactionType: string) => {
    if (transactionType === 'Deposit') {
        return '#10d510';
    }
    if (transactionType === 'Liquidation') {
        return '#ff3333';
    }
    return '#51e3e8';
};

export default function Transaction({transaction}) {
    return (
        <View style={styles.container}>
            <View style={styles.transactionRow}>
                <Icon name={transactionTypeIcon(transaction.transaction_type)} color={transactionTypeColor(transaction.transaction_type)} style={{flex: 1}}/>
                <View style={{flex: 2, flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 10}}>
                    <Text style={{fontSize: 16, color: transactionTypeColor(transaction.transaction_type)}}>{transaction.currency}</Text>
                    <Text style={{fontSize: 24, color: transactionTypeColor(transaction.transaction_type)}}>{transaction.amount.toLocaleString()}</Text>
                </View>
                <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-end"}}>
                    <Text style={{color: transactionTypeColor(transaction.transaction_type)}}>Fees: </Text>
                    <Text style={{color: transactionTypeColor(transaction.transaction_type)}}>{transaction.fees.toLocaleString()}</Text>
                </View>
            </View>
            <View style={styles.transactionRow}>
                <Text style={{color: '#B3B3B3'}}>{transaction.transaction_type}</Text>
                <Text style={{color: '#B3B3B3'}}>{transaction.transaction_date}</Text>
                <Text style={{color: '#B3B3B3'}}>{transaction.status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 10,
        height: 80,
        borderRadius: 10,
        padding: 8,
        marginVertical: 5,
        backgroundColor: "#ffffff",
    },

    transactionRow: {
        display: "flex", 
        flexDirection: "row", 
        gap: 5, 
        justifyContent: "space-between",
        alignItems: "center"
    },
    transactionCurrency: {
        fontSize: 18,
        color: "#000",
    },
    transactionStatus: {
        color: "#4e4e4e",
        fontSize: 16,
    },
});
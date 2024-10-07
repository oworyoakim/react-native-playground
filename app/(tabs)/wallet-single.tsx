import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar
} from "react-native";
import {useState} from "react";
import {uuid} from "expo-modules-core";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Icon} from "@/components/Icon";
import Transaction from "@/components/Transaction";

const transactions = [
    {
        id: uuid.v4(),
        amount: 100000,
        fees: 1200,
        currency: 'UGX',
        transaction_type: 'Deposit',
        transaction_date: '2024/10/07 09:10',
        status: 'SUCCESSFUL'
    },
    {
        id: uuid.v4(),
        amount: 83000,
        fees: 800,
        currency: 'UGX',
        transaction_type: 'Deposit',
        transaction_date: '2024/10/06 13:34',
        status: 'SUCCESSFUL'
    },
    {
        id: uuid.v4(),
        amount: 310000,
        fees: 2500,
        currency: 'UGX',
        transaction_type: 'Liquidation',
        transaction_date: '2024/10/04 12:05',
        status: 'SUCCESSFUL'

    },
    {
        id: uuid.v4(),
        amount: 351000,
        fees: 1000,
        currency: 'UGX',
        transaction_type: 'TransferIn',
        transaction_date: '2024/10/04 10:22',
        status: 'SUCCESSFUL'
    },
];


export default function WalletSingle() {
    const [showBalance, setShowBalance] = useState(false);
    const currency = 'UGX';
    const balance = 35630000;
    const accountName = "Voluntary Savings";
    const accountNumber = '2638383673';
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <View style={styles.accountContainer}>
                        <View style={styles.accountWrapper}>
                            <Text style={styles.accountName}>{accountName}</Text>
                            <Text style={styles.accountNumber}>(ID: {accountNumber})</Text>
                        </View>
                        <View style={styles.balanceWrapper}>
                            <Text style={styles.currencyText}>{currency}</Text>
                            <Text style={styles.balanceText}>{showBalance ? balance.toLocaleString() : 'xxxx'}</Text>
                            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                                <Icon name={showBalance ? 'eye-outline' : 'eye-off-outline'} color={'#fafafa'}
                                      style={{marginLeft: 25}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.walletIconWrapper}>
                        <Image
                            source={require('@/assets/images/wallet-transparent.png')}
                            style={styles.walletIcon}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.actionButtons}>
                <View style={styles.actionButtonContainer}>
                    <View style={styles.actionButtonWrapper}>
                        <Image
                            source={require('@/assets/images/wallet-deposit.png')}
                            style={styles.actionButtonImage}
                        />
                    </View>
                    <Text>Deposit</Text>
                </View>
                <View style={styles.actionButtonContainer}>
                    <View style={styles.actionButtonWrapper}>
                        <Image
                            source={require('@/assets/images/wallet-liquidation.png')}
                            style={styles.actionButtonImage}
                        />
                    </View>
                    <Text>Liquidate</Text>
                </View>
                <View style={styles.actionButtonContainer}>
                    <View style={styles.actionButtonWrapper}>
                        <Image
                            source={require('@/assets/images/wallet-transfers.png')}
                            style={styles.actionButtonImage}
                        />
                    </View>
                    <Text>Transfer</Text>
                </View>
            </View>
            <View style={styles.transactionHistoryContainer}>
                <Text style={styles.transactionHistoryTitle}>Transactions History</Text>
                <FlatList
                    data={transactions}
                    renderItem={({item}) => <Transaction transaction={item}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        gap: 8,
        marginTop: StatusBar.currentHeight,
    },
    headerContainer: {
        display: "flex",
        padding: 10,
        backgroundColor: '#536353',
        height: 256,
        gap: 10
    },
    headerContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 60,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    accountContainer: {
        flex: 1,
        gap: 10,

    },
    accountName: {
        color: '#fff',
        fontSize: 28
    },
    accountNumber: {
        fontSize: 16,
        color: "#fefefe",
        paddingLeft: 10
    },
    walletIconWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 60,
    },
    walletIcon: {
        width: 45,
        height: 45
    },
    accountWrapper: {
        display: "flex",
        gap: 10,
        alignItems: "baseline",
    },
    balanceWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "baseline",
        padding: 10
    },
    currencyText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold"
    },
    balanceText: {
        fontSize: 32,
        color: "#ffffff",
        fontWeight: "semibold",
        flex: 1
    },
    actionButtons: {
        position: "absolute",
        width: 378,
        height: 158,
        top: 231,
        left: 19,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    actionButtonContainer: {
        width: 70,
        height: 88,
        alignItems: "center",
        gap: 5
    },
    actionButtonWrapper: {
        width: 90,
        height: 90,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        justifyContent: "center"
    },
    actionButtonImage: {
        height: 88,
        width: 88,
        color: "#536353",
    },
    
    transactionHistoryContainer: {
        top: 156,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        gap: 10
    },
    transactionHistoryTitle: {
        fontSize: 26,
        fontWeight: "600",
    },
});
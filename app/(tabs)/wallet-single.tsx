import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar,
    Dimensions, SafeAreaView
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
    {
        id: uuid.v4(),
        amount: Math.round(Math.random() * 1000000),
        fees: Math.round(Math.random() * 1000),
        currency: 'UGX',
        transaction_type: 'Deposit',
        transaction_date: '2024/10/07 09:10',
        status: 'SUCCESSFUL'
    },
    {
        id: uuid.v4(),
        amount: Math.round(Math.random() * 1000000),
        fees: Math.round(Math.random() * 1000),
        currency: 'UGX',
        transaction_type: 'Deposit',
        transaction_date: '2024/10/06 13:34',
        status: 'SUCCESSFUL'
    },
    {
        id: uuid.v4(),
        amount: Math.round(Math.random() * 1000000),
        fees: Math.round(Math.random() * 1000),
        currency: 'UGX',
        transaction_type: 'Liquidation',
        transaction_date: '2024/10/04 12:05',
        status: 'SUCCESSFUL'

    },
    {
        id: uuid.v4(),
        amount: Math.round(Math.random() * 1000000),
        fees: Math.round(Math.random() * 1000),
        currency: 'UGX',
        transaction_type: 'TransferIn',
        transaction_date: '2024/10/04 10:22',
        status: 'SUCCESSFUL'
    },
];
const screenWidth = Dimensions.get('window').width;

export default function WalletSingle() {
    const [showBalance, setShowBalance] = useState(false);
    const currency = 'UGX';
    const balance = 35630000;
    const accountName = "Voluntary Savings";
    const accountNumber = '2638383673';
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerContent}>
                        <View style={styles.accountContainer}>
                            <View style={styles.accountWrapper}>
                                <Text style={styles.accountName}>{accountName}</Text>
                                <Text style={styles.accountNumber}>(ID: {accountNumber})</Text>
                            </View>
                            <View style={styles.walletIconWrapper}>
                                <Image
                                    source={require('@/assets/images/wallet-transparent.png')}
                                    style={styles.walletIcon}
                                />
                            </View>
                        </View>
                        <View style={styles.balanceWrapper}>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 10}}>
                                <Text style={styles.currencyText}>{currency}</Text>
                                <Text style={styles.balanceText}>{showBalance ? balance.toLocaleString() : 'xxxx'}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                                <Icon name={showBalance ? 'eye-outline' : 'eye-off-outline'} color={'#fafafa'}
                                      style={{marginRight: 10}}/>
                            </TouchableOpacity>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
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
        justifyContent: "space-between",
        gap: 10,
        marginTop: 60,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    accountContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    accountName: {
        color: '#fff',
        fontSize: 24
    },
    accountNumber: {
        fontSize: 16,
        color: "#fefefe",
        paddingLeft: 10
    },
    walletIconWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 70,
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 70,
    },
    walletIcon: {
        width: 50,
        height: 50
    },
    accountWrapper: {
        display: "flex",
        gap: 10,
    },
    balanceWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 10,
        justifyContent: 'space-between'
    },
    currencyText: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold"
    },
    balanceText: {
        fontSize: 28,
        color: "#ffffff",
        fontWeight: "semibold",
        flex: 1
    },
    actionButtons: {
        position: "absolute",
        width: "auto",
        top: 228,
        left: 0,
        right: 0,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    actionButtonContainer: {
        alignItems: "center",
        gap: 15
    },
    actionButtonWrapper: {
        height: 105,
        borderRadius: 5,
        backgroundColor: "#e7e7e7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    actionButtonImage: {
        height: 88,
        width: 88,
        color: "#536353",
    },
    
    transactionHistoryContainer: {
        top: 165,
        paddingHorizontal: 10,
        display: "flex",
        gap: 10
    },
    transactionHistoryTitle: {
        fontSize: 26,
        fontWeight: "600",
    },
});
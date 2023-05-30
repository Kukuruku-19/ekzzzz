import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    SafeAreaView,
} from "react-native";
export default function inputs({ setInput, input }: any) {
    return (
        <TextInput
            style={{
                backgroundColor: "white",
                margin: 15,
                fontSize: 20,
                padding: 5,
                borderWidth: 2,
                borderColor: "blue",
            }}
            value={input.toString()}
            onChangeText={(input) =>
                setInput(isNaN(Number(input)) ? 0 : Number(input))
            }
            keyboardType="numeric"
        />
    );
}
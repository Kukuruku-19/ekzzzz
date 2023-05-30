import "react";
import { View, Text } from "react-native";

export default function Header() {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: 1,
                borderBottomColor: "black",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "700",
                    alignSelf: "center",
                    color: "black",
                }}
            >
                Модуль №2
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "700",
                    alignSelf: "center",
                    color: "black",
                    textAlign: "center",
                }}
            >
                Виконав студент групи КН-32 Коркунда Нікіта
            </Text>
        </View>
    );
}

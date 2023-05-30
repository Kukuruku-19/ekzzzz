import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Header from "./header";
import { InputValidator } from "./dicesValid";
import throwDice from "./dices";
import _ from "lodash";
import Inputs from "./inputs";
const Screen = () => {
    const [moves, setMoves] = useState(0);
    const [input, setInput] = useState(4);
    const [result, setResult] = useState<any>([]);
    const [maxuser, setMaxuser] = useState(0);
    const [maxcomputer, setMaxcomputer] = useState(0);

    const newGame = () => {
        setMaxuser(0);
        setMaxcomputer(0);
        setResult([]);
    };
    const validInput = () => {
        if (moves <= 0) {
            alert("Ходи закінчились");
            return;
        }
        const r = throwDice();

        const r1 = Math.max(
            ...[...result, r].map((res: { user: any }) => res.user)
        );
        const r2 = Math.max(
            ...[...result, r].map((res: { computer: any }) => res.computer)
        );
        setMaxuser(r1);
        setMaxcomputer(r2);

        setResult([...result, r]);
        setMoves(moves - 1);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <ScrollView
                style={{
                    flex: 1,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "700",
                        alignSelf: "center",
                    }}
                >
                    Кидки {moves}
                </Text>
                <Inputs setInput={setInput} input={input}/>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#66a3ff" : "#0066ff",
                        },
                        {
                            width: 300,
                            height: 50,
                            justifyContent: "center",
                            alignSelf: "center",
                            borderRadius: 12,
                        },
                    ]}
                    onPress={() => {
                        if (!InputValidator(input).isValid) {
                            alert(InputValidator(input).message);
                            return;
                        }
                        setMoves(input);
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            alignSelf: "center",
                        }}
                    >
                        Встановити кількість кидків
                    </Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#66a3ff" : "#0066ff",
                        },
                        {
                            width: 110,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 50,
                        },
                    ]}
                    onPress={validInput}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            alignSelf: "center",
                        }}
                    >
                        Кинути кубики
                    </Text>
                </Pressable>

                {result.map((elem: any, index: any) => {
                    if (
                        Number(elem.computer) === maxcomputer &&
                        Number(elem.user) === maxuser
                    ) {
                        return (
                            <View key={index} style={{ alignItems: "center" }}>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    throw {index + 1}
                                </Text>
                                <Text
                                    style={{
                                        color: "green",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    computer : {elem["computer"]}
                                </Text>
                                <Text
                                    style={{
                                        color: "green",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    user : {elem["user"]}
                                </Text>
                            </View>
                        );
                    }
                    if (Number(elem["computer"]) === maxcomputer) {
                        return (
                            <View key={index} style={{ alignItems: "center" }}>
                                <Text
                                    style={{ fontSize: 20, fontWeight: "700" }}
                                >
                                    throw {index + 1}
                                </Text>
                                <Text
                                    style={{
                                        color: "green",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    computer : {elem["computer"]}
                                </Text>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    user : {elem["user"]}
                                </Text>
                            </View>
                        );
                    }
                    if (Number(Number(elem["user"]) === maxuser)) {
                        return (
                            <View key={index} style={{ alignItems: "center" }}>
                                <Text
                                    style={{ fontSize: 20, fontWeight: "700" }}
                                >
                                    throw {index + 1}
                                </Text>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    computer : {elem["computer"]}
                                </Text>
                                <Text
                                    style={{
                                        color: "green",
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    user : {elem["user"]}
                                </Text>
                            </View>
                        );
                    }
                    return (
                        <View key={index} style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 20, fontWeight: "700" }}>
                                throw {index + 1}
                            </Text>
                            <Text
                                style={{
                                    color: "black",
                                    fontSize: 20,
                                    fontWeight: "700",
                                }}
                            >
                                computer : {elem["computer"]}
                            </Text>
                            <Text
                                style={{
                                    color: "black",
                                    fontSize: 20,
                                    fontWeight: "700",
                                }}
                            >
                                user : {elem["user"]}
                            </Text>
                        </View>
                    );
                })}
                <Text
                    style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "700",
                        alignSelf: "center",
                    }}
                >
                    User Total:
                    {result.reduce((summ: number, elem: any) => {
                        return summ + elem.user;
                    }, 0)}
                </Text>
                <Text
                    style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "700",
                        alignSelf: "center",
                    }}
                >
                    Computer Total:
                    {result.reduce((summ: number, elem: any) => {
                        return summ + elem.computer;
                    }, 0)}
                </Text>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#66a3ff" : "#0066ff",
                        },
                        {
                            width: 100,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 50,
                        },
                    ]}
                    onPress={newGame}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            alignSelf: "center",
                            color: "white",
                        }}
                    >
                        Нова гра
                    </Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Screen;

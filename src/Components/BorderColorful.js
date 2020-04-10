import * as React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function BorderColorful() {
  return (
    <View style={{ height: 5, flexDirection: "row" }}>
      <LinearGradient
        colors={["#e73435", "#d63539", "#ba3133"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "20%" }}
      />
      <LinearGradient
        colors={["#ba3133", "#973736", "#a75237"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "10%" }}
      />
      <LinearGradient
        colors={["#a75237", "#e69b23", "#e08728"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "20%" }}
      />
      <LinearGradient
        colors={["#e08728", "#ba2f46", "#9a3852"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "10%" }}
      />
      <LinearGradient
        colors={["#9a3852", "#447883", "#2c967e"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "10%" }}
      />
      <LinearGradient
        colors={["#2c967e", "#00cf70", "#00dc68"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "10%" }}
      />
      <LinearGradient
        colors={["#00dc68", "#3b5998", "#192f6a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "20%" }}
      />
    </View>
  );
}

import * as React from "react";
import { View } from "react-native";
import { BoxShadow } from "react-native-shadow";

export function CardUnimpressed(props) {
  const { style, children } = props;
  const shadowOptPress = {
    width: style.width - 10,
    height: style.width - 10,
    color: "#000",
    border: 4,
    radius: 3,
    opacity: 0.08,
    x: 5,
    y: 5,
    style: { marginVertical: 5 },
  };

  const shadowOptWhitePress = {
    width: style.width - 10,
    height: style.width - 10,
    color: "#fff",
    border: 3,
    radius: 3,
    opacity: 0.1,
    x: -2,
    y: -7,
    style: { marginVertical: 5 },
  };

  return (
    <View style={style}>
      <BoxShadow setting={shadowOptPress}>
        <View
          style={{
            backgroundColor: "#e0e0e0",
            justifyContent: "center",
            alignItems: "center",
            width: "105%",
            height: "105%",
          }}
        >
          {children}
        </View>
        <View style={{ position: "absolute" }}>
          <BoxShadow setting={shadowOptWhitePress} />
        </View>
      </BoxShadow>
    </View>
  );
}

export function CardPressed(props) {
  const { style, children } = props;
  const shadowOpt = {
    width: style.width - 10,
    height: style.width - 10,
    color: "#000",
    border: 6,
    radius: 3,
    opacity: 0.08,
    x: -4,
    y: -4,
    style: { marginVertical: 5 },
  };

  const shadowOptWhite = {
    width: style.width - 10,
    height: style.width - 10,
    color: "#fff",
    border: 3,
    radius: 3,
    opacity: 0.1,
    x: 1,
    y: 1,
    style: { marginVertical: 5 },
  };

  return (
    <View style={style}>
      <View
        style={{
          borderRightColor: "rgba(255, 255, 255, 0.2)",
          borderBottomColor: "rgba(255, 255, 255, 0.2)",
          borderLeftColor: "rgba(0, 0, 0, 0.08)",
          borderTopColor: "rgba(0, 0, 0, 0.08)",
          borderWidth: 2,
          borderRadius: 5,
          width: 102,
          height: 102,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoxShadow setting={shadowOpt}>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {children}
          </View>
          <View style={{ position: "absolute" }}>
            <BoxShadow setting={shadowOptWhite} />
          </View>
        </BoxShadow>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({});

import * as React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import BorderColorful from "../../../Components/BorderColorful";

export default function Header() {
  const message = 179;
  const phone = 2;
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        height: 55,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 0.3 }}>
            <View
              style={{
                width: 32,
                height: 32,
                alignSelf: "center",
                borderRadius: 16,
                borderWidth: 3,
                borderColor: "white",
                backgroundColor: "#e0e0e0",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
            >
              <Image
                source={{
                  uri:
                    "https://fwmmodels.com.br/wp-content/uploads/2019/09/83849348-15d5-44e7-b22e-1d99e3051d51.jpg",
                }}
                style={{ width: "100%", height: "100%", borderRadius: 16 }}
              />
            </View>
          </View>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              color: "#8d95a5",
              fontWeight: "bold",
            }}
          >
            Hello, Maria
          </Text>
        </View>
        <View
          style={{
            flex: 0.4,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <LinearGradient
            colors={["#efeeed", "#efebe9", "#eeecea"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 5,
              backgroundColor: "#efeeee",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            {message > 0 && <Notification value={message} />}
            <Icon name="email" size={18} color="#c8c8ca" />
          </LinearGradient>
          <LinearGradient
            colors={["#efeeed", "#efebe9", "#eeecea"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 5,
              backgroundColor: "#efeeee",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            {phone > 0 && <Notification value={phone} />}
            <Icon name="phone" size={18} color="#c8c8ca" />
          </LinearGradient>
        </View>
      </View>
      <BorderColorful />
    </View>
  );
}

const Notification = ({ value }) => {
  return (
    <View
      style={{
        backgroundColor: "#f5a623",
        position: "absolute",
        zIndex: 1,
        bottom: 22,
        left: 20,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 10 }}>{value}</Text>
    </View>
  );
};

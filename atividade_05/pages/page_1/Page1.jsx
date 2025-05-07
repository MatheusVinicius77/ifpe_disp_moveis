import {
  Avatar,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";

const StarIcon = (props) => <Icon {...props} name="star" />;
const CompassIcon = (props) => (
  <Icon
    {...props}
    name="search-outline"
    style={{ width: 24, height: 24, tintColor: "#5b6bf5", fontWeight: "bold" }}
  />
);
const HomeIcon = (props) => (
  <Icon
    {...props}
    name="home-outline"
    style={{
      width: 24,
      height: 24,
      tintColor: "white",
      fontWeight: "bold",
    }}
  />
);

const AppointmentIcon = (props) => (
  <Image
    source={require("../../assets/page1/appointment.png")}
    style={{
      width: 30,
      height: 30,
    }}
  />
);

const profileIcon = (props) => (
  <Image
    source={require("../../assets/page1/avatar_icon.png")}
    style={{
      width: 30,
      height: 30,
    }}
  />
);

const DoctorIcon = (props) => (
  <Image
    source={require("../../assets/page1/doctor_icon.png")}
    style={{
      width: 30,
      height: 30,
    }}
  />
);

const Page1 = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState("");
  const avatarLogo = "https://avatars.githubusercontent.com/u/75319396?v=4";
  return (
    <Layout style={{ flex: 1, backgroundColor: "#f4f6ff" }}>
      <Layout style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#5b6bf5",
            width: "100%",
            padding: 25,
            minHeight: 150,
            justifyContent: "center",
            gap: 30,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Avatar size="large" source={{ uri: avatarLogo }} />{" "}
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Welcome
              </Text>
              <Text style={{ fontWeight: "semi-bold", color: "white" }}>
                Matheus Vinicius
              </Text>
            </View>
          </View>
          <Input
            placeholder="Search  doctor"
            value={value}
            onChangeText={(nextValue) => setValue(nextValue)}
            accessoryRight={CompassIcon}
            style={{ borderRadius: 5 }}
          />
        </View>
      </Layout>

      <Layout style={{ flex: 1, backgroundColor: "#f4f6ff", padding: 25 }}>
        <Layout style={{ flex: 1, backgroundColor: "#f4f6ff" }}>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#f4f6ff",
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 20 }}>Categories</Text>
            <Text style={{ fontWeight: "500", fontSize: 20 }}>Show all</Text>
          </Layout>

          <Layout
            style={{ gap: 15, marginTop: 15, backgroundColor: "#f4f6ff" }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f4f6ff",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Image
                  source={require("../../assets/page1/consultation.png")} // Caminho correto
                  style={styles.image}
                />
              </View>
              <View style={{ marginInline: 10 }}>
                <Image
                  source={require("../../assets/page1/dentist.png")} // Caminho correto
                  style={styles.image}
                />
              </View>
              <View style={styles.container}>
                <Image
                  source={require("../../assets/page1/cardiologist.png")} // Caminho correto
                  style={styles.image}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f4f6ff",
                marginTop: 2,
                justifyContent: "space-between",
              }}
            >
              <View style={styles.container}>
                <Image
                  source={require("../../assets/page1/hospital.png")} // Caminho correto
                  style={styles.image}
                />
              </View>
              <View style={{ marginInline: 10 }}>
                <Image
                  source={require("../../assets/page1/emergency.png")} // Caminho correto
                  style={styles.image}
                />
              </View>
              <View style={styles.container}>
                <Image
                  source={require("../../assets/page1/laboratory.png")} // Caminho correto
                  style={styles.image}
                />
              </View>
            </View>
          </Layout>
        </Layout>

        <Layout style={{ flex: 1, backgroundColor: "#f4f6ff", marginTop: 15 }}>
          <Layout
            style={{
              justifyContent: "space-between",
              backgroundColor: "#f4f6ff",
            }}
          >
            <Text style={{ fontWeight: "500", marginBlock: 5, fontSize: 20 }}>
              Top Doctors
            </Text>
            <Layout>
              <Layout style={{ backgroundColor: "#f4f6ff" }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 15,
                    padding: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Avatar
                    source={{
                      uri:
                        "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg",
                    }}
                    style={{ width: 70, height: 70 }}
                  />{" "}
                  <View style={{ gap: 5 }}>
                    <Text style={{ fontWeight: "500" }}>dr Hans Chucrute</Text>
                    <Text>Consultant - Physiotherapy</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Icon
                        name="star"
                        fill="#FFC107"
                        style={{ width: 20, height: 20, marginRight: 5 }}
                      />
                      <Text style={{ fontWeight: "300" }}>
                        4.9 (37 reviews)
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 15,
                    padding: 10,
                    marginTop: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Avatar
                    source={{
                      uri:
                        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
                    }}
                    style={{ width: 70, height: 70 }}
                  />{" "}
                  <View style={{ gap: 5 }}>
                    <Text style={{ fontWeight: "500" }}>
                      dr Jonathan Patterson
                    </Text>
                    <Text>Consultant - Internal Medicine</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Icon
                        name="star"
                        fill="#FFC107"
                        style={{ width: 20, height: 20, marginRight: 5 }}
                      />
                      <Text style={{ fontWeight: "300" }}>
                        4.9 (37 reviews)
                      </Text>
                    </View>
                  </View>
                </View>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>

      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={{ backgroundColor: "#5b6bf5" }}
        appearance="noIndicator" // Remove a linha padrão azul
      >
        <BottomNavigationTab
          title={() => (
            <Text style={{ color: "white", fontSize: 12 }}>Home</Text>
          )}
          icon={HomeIcon}
        />
        <BottomNavigationTab
          title={() => (
            <Text style={{ color: "white", fontSize: 12 }}>Doctors</Text>
          )}
          icon={DoctorIcon}
        />
        <BottomNavigationTab
          title={() => (
            <Text style={{ color: "white", fontSize: 12 }}>Appointment</Text>
          )}
          icon={AppointmentIcon}
        />
        <BottomNavigationTab
          title={() => (
            <Text style={{ color: "white", fontSize: 12 }}>Profile</Text>
          )}
          icon={profileIcon}
        />
      </BottomNavigation>
    </Layout>
  );
};

const styles = StyleSheet.create({
  ontainer: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Page1;

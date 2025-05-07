import {
  Avatar,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
const CompassIcon = (props) => (
  <Icon
    {...props}
    name="search-outline"
    style={{
      width: 24,
      height: 24,
      tintColor: "#5958b2",
      fontWeight: "bold",
      opacity: 0.5,
    }}
  />
);

const HamburgerIcon = (props) => (
  <Icon
    {...props}
    name="menu-outline"
    style={{
      width: 35,
      height: 35,
      tintColor: "#5958b2",
      fontWeight: "bold",
    }}
  />
);
const HomeIcon = (props) => (
  <Image
    source={require("../../assets/page2/bottomIcon/home.png")}
    style={{
      width: 35,
      height: 35,
    }}
  />
);

const AppointmentIcon = (props) => (
  <Image
    source={require("../../assets/page2/bottomIcon/search.png")}
    style={{
      width: 35,
      height: 35,
    }}
  />
);

const profileIcon = (props) => (
  <Image
    source={require("../../assets/page2/bottomIcon/profile.png")}
    style={{
      width: 35,
      height: 35,
    }}
  />
);

const PageIcon = (props) => (
  <Image
    source={require("../../assets/page2/page_icon.png")}
    style={{
      width: 40,
      height: 40,
    }}
  />
);

const ExploreIcon = (props) => (
  <Image
    source={require("../../assets/page2/bottomIcon/explore.png")}
    style={{
      width: 35,
      height: 35,
    }}
  />
);

const Page2 = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [destinations, setDestinations] = React.useState([]);
  const [recommended, setRecommended] = React.useState([]);
  const avatarLogo = "https://avatars.githubusercontent.com/u/75319396?v=4";
  const apiUrl = "http://localhost:3000/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl + "categories");
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDestinations = async () => {
      try {
        const response = await fetch(apiUrl + "popularDestinations");
        const data = await response.json();
        console.log(data);
        setDestinations(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRecommended = async () => {
      try {
        const response = await fetch(apiUrl + "recommended");
        const data = await response.json();
        console.log(data);
        setRecommended(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchDestinations();
    fetchRecommended();
  }, []);

  return (
    <Layout style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Layout style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#5958b2",
            width: "100%",
            padding: 25,
            minHeight: 75,
            justifyContent: "center",
            gap: 30,
          }}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <PageIcon />
            <Input
              placeholder="Search here..."
              value={value}
              onChangeText={(nextValue) => setValue(nextValue)}
              accessoryRight={CompassIcon}
              style={{ borderRadius: 5 }}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Avatar size="large" source={{ uri: avatarLogo }} />{" "}
            <View style={{ gap: 5, flex: 1 }}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Welcome!
              </Text>
              <Text style={{ fontWeight: "300", color: "white" }}>
                Matheus Vinicius
              </Text>
            </View>
            <View style={{ position: "relative", marginBlock: "auto" }}>
              <BellIcon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: "rgba(0,0,0,0.5)",
                  marginBlock: "auto",
                  backgroundColor: "white",
                  borderRadius: 50,
                  padding: 5,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 5,
                  left: 5,
                  width: 8,
                  height: 8,
                  backgroundColor: "#ffbd59",
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        </View>
      </Layout>

      <Layout style={{ flex: 1, backgroundColor: "#ffffff", padding: 25 }}>
        <Layout style={{ backgroundColor: "#ffffff" }}>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ffffff",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 20 }}>Category</Text>
            <HamburgerIcon />
          </Layout>

          <Layout
            style={{ gap: 15, marginTop: 15, backgroundColor: "#ffffff" }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "#ffffff",
              }}
            >
              {categories && categories.length > 0
                ? categories.map((category) => (
                    <View style={styles.container}>
                      <Image
                        source={{
                          uri: "http://localhost:3000" + category.image,
                        }}
                        style={styles.image}
                      />
                    </View>
                  ))
                : null}
            </View>
          </Layout>
        </Layout>

        <Layout style={{ backgroundColor: "#ffffff", marginTop: 15 }}>
          <Layout
            style={{
              justifyContent: "space-between",
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "400", marginBlock: 15, fontSize: 20 }}
              >
                Popular Destinations
              </Text>
              <HamburgerIcon />
            </View>

            <Layout>
              <Layout
                style={{ backgroundColor: "#ffffff", flexDirection: "row" }}
              >
                {destinations && destinations.length > 0
                  ? destinations.map((destination) => (
                      <View style={styles.container} key={destination.id}>
                        <Image
                          source={{
                            uri: "http://localhost:3000" + destination.image,
                          }}
                          style={styles.image}
                        />
                      </View>
                    ))
                  : null}
              </Layout>
            </Layout>
          </Layout>
        </Layout>

        <Layout style={{ backgroundColor: "#ffffff" }}>
          <Layout
            style={{
              justifyContent: "space-between",
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "400", marginBlock: 10, fontSize: 20 }}
              >
                Recommended
              </Text>
            </View>

            <Layout>
              <Layout
                style={{
                  backgroundColor: "#ffffff",
                  flexDirection: "row",
                  gap: 15,
                }}
              >
                {recommended && recommended.length > 0
                  ? recommended.map((recommend) => (
                      <View style={styles.container} key={recommend.id}>
                        <Image
                          source={{
                            uri: "http://localhost:3000" + recommend.image,
                          }}
                          style={styles.imageRecommend}
                        />
                      </View>
                    ))
                  : null}
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>

      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={{ backgroundColor: "#5958b2" }}
        appearance="noIndicator" // Remove a linha padrão azul
      >
        <Layout
          style={{
            flexDirection: "row",
            backgroundColor: "#5958b2",
            justifyContent: "space-between",
            paddingBlock: 10,
            paddingInline: 25,
          }}
        >
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "white", fontSize: 12 }}>Home</Text>
            )}
            icon={HomeIcon}
          />
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "white", fontSize: 12 }}>Explore</Text>
            )}
            icon={ExploreIcon}
          />
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "white", fontSize: 12 }}>Search</Text>
            )}
            icon={AppointmentIcon}
          />
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "white", fontSize: 12 }}>Profile</Text>
            )}
            icon={profileIcon}
          />
        </Layout>
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
    width: 75,
    height: 75,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 10,
  },
  imageRecommend: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Page2;

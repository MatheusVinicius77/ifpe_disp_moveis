import {
  Avatar,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
} from "@ui-kitten/components";
import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
  Image,
} from "react-native";
import CardUser from "../../components/cardUser";

const { width, height } = Dimensions.get("window");

const BellIcon = (props) => (
  <Icon
    {...props}
    name="bell"
    style={{
      width: 24,
      height: 24,
      tintColor: "#3f60a0",
      fontWeight: "bold",
    }}
  />
);
const CompassIcon = (props) => (
  <Icon {...props} name="search-outline" style={styles.icon} />
);

const EmailIcon = (props) => (
  <Icon
    {...props}
    name="email"
    style={[
      styles.largeIcon, // estilos padrão
      { backgroundColor: "white", borderRadius: 50, padding: 6 }, // estilos específicos
      props.style, // estilos externos que você passar
    ]}
  />
);

const HomeIcon = (props) => (
  <Icon
    {...props}
    name="home"
    style={{
      width: 24,
      height: 24,
      tintColor: "#3f60a0",
      fontWeight: "bold",
    }}
  />
);

const ChatIcon = (props) => (
  <Icon
    {...props}
    name="message-square"
    style={{
      width: 24,
      height: 24,
      tintColor: "#3f60a0",
      fontWeight: "bold",
    }}
  />
);

const UpperWave = () => (
  <Image
    source={require("../../assets/page3/upper_wave.png")}
    style={styles.wave}
  />
);

const BottomWave = () => (
  <Image
    source={require("../../assets/page3/bottom_wave.png")}
    style={styles.wave}
  />
);

const ProfileIcon = (props) => (
  <Icon
    {...props}
    name="person"
    style={{
      width: 24,
      height: 24,
      tintColor: "#3f60a0",
      fontWeight: "bold",
    }}
  />
);

const ArrowDownIcon = (props) => (
  <Icon
    {...props}
    name="arrow-down"
    style={{
      width: 16,
      height: 16,
      tintColor: "#3f60a0",
      fontWeight: "bold",
    }}
  />
);

const ExploreIcon = () => (
  <Image
    source={require("../../assets/page2/bottomIcon/explore.png")}
    style={styles.bottomIcon}
  />
);

const Page3 = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Layout style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Layout
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          padding: 20,
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <EmailIcon />
          </View>
          <View
            style={{
              borderBottomColor: "#3f60a0",
              borderBottomWidth: 1,
              alignItems: "center",
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "black",
                opacity: 0.8,
                alignSelf: "center",
                marginBlock: "auto",
              }}
            >
              Messages & Chat
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "black", fontWeight: "300" }}>
            Mark All read
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ color: "black", fontWeight: "300" }}>
              Sort by time
            </Text>
            <ArrowDownIcon />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: -60,
            left: -6,
            zIndex: -1,
          }}
        >
          <UpperWave />
        </View>
      </Layout>

      <Layout
        style={{
          flex: 4,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          paddingInline: 20,
          gap: 10,
          position: "relative",
        }}
      >
        <CardUser
          username="Claudia Alves"
          description="Do more of what you love."
          visualization={"3m ago"}
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSTQLezhAjhf515pGBYHvboyfK5BjmZ_RZQ&s"
          countMessages={3}
        />
        <CardUser
          username="Dani Martinez"
          description="Do your own thing."
          visualization={"5m ago"}
          userImg="https://st2.depositphotos.com/2783505/12360/i/450/depositphotos_123606252-stock-photo-laughing-latin-american-guy-with.jpg"
          countMessages={1}
        />
        <CardUser
          username="Kimberly Nguyen"
          description="Kindness is beatufil."
          visualization={"1h ago"}
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_pf0jRbGLeZboP5XmRiAyVERhNUAuuLX8A&s"
          countMessages={2}
        />
        <CardUser
          username="Mariana Napolitani"
          description="Live your purpose."
          visualization={"2h ago"}
          userImg="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg/1200px-Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg"
          countMessages={1}
        />
        <CardUser
          username="Ollivia Wilson"
          description="You got this."
          visualization={"5h ago"}
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCNfRnf9u2jvf9X3R6eSEoF2W2l5oluAtsw&s"
          isRead={true}
        />
        <CardUser
          username="Rochelle Beaudry"
          description="You're wonderful"
          visualization={"yesterday"}
          userImg="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg"
          isRead={true}
        />
        <CardUser
          username="Soo Jin Ae"
          description="Keep it simple"
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2qXoUaoBe2ujgRVZ6_pBD-nHQyIvz3m-Ig&s"
          visualization={"yesterday"}
          isRead={true}
        />
        <View
          style={{
            position: "absolute",
            bottom: -5,
            right: 0,
            zIndex: -2,
          }}
        >
          <BottomWave />
        </View>
      </Layout>
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={{
          backgroundColor: "#ffffff",
        }}
        appearance="noIndicator"
      >
        <Layout
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-between",
            paddingBlock: 10,
            paddingInline: 25,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "#3f60a0", fontSize: 12 }}>Home</Text>
            )}
            icon={HomeIcon}
          />

          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "#3f60a0", fontSize: 12 }}>Chat</Text>
            )}
            icon={(props) => (
              <View style={{ alignItems: "center" }}>
                {selectedIndex === 0 && (
                  <View
                    style={{
                      height: 3,
                      width: 30,
                      backgroundColor: "#3f60a0",
                      borderRadius: 2,
                      marginBottom: 4,
                    }}
                  />
                )}
                <ChatIcon {...props} />
              </View>
            )}
          />
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "#3f60a0", fontSize: 12 }}>Mail</Text>
            )}
            icon={BellIcon}
          />
          <BottomNavigationTab
            title={() => (
              <Text style={{ color: "#3f60a0", fontSize: 12 }}>Profile</Text>
            )}
            icon={ProfileIcon}
          />
        </Layout>
      </BottomNavigation>
    </Layout>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontSize: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#3f60a0",
    fontWeight: "bold",
    opacity: 0.5,
  },
  largeIcon: {
    width: 35,
    height: 35,
    tintColor: "#3f60a0",
    fontWeight: "bold",
  },
  bottomIcon: {
    width: 35,
    height: 35,
  },
  bottomNavigation: {
    backgroundColor: "#3f60a0",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  wave: {
    width: 160,
    height: 210,
  },
});

export default Page3;

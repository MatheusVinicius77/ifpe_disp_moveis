import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Page1 from "./pages/page_1/Page1";
import Page2 from "./pages/page_2/Page2";
import Page3 from "./pages/page_3/Page3";
import { View } from "react-native";

// Ícone usado nas abas

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={{ flex: 1 }}>
          <Page2 />
        </View>
      </ApplicationProvider>
    </>
  );
}

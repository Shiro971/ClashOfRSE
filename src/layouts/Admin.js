import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

// Views
import Dashboard from "../views/admin/Dashboard";
import Maps from "../views/admin/Maps";
import Settings from "../views/admin/Settings";
import Tables from "../views/admin/Tables";

const Drawer = createDrawerNavigator();

export default function Admin() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={() => <Sidebar />}
        screenOptions={{
          header: () => <AdminNavbar />,
          headerTitle: () => <HeaderStats />,
          headerStyle: {
            backgroundColor: "#1A202C", // Example color
          },
        }}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Maps" component={Maps} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Tables" component={Tables} />
      </Drawer.Navigator>
      <FooterAdmin />
    </NavigationContainer>
  );
}

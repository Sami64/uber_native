import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const data = [
	{ id: "", image: "https://links.papareact.com/3pn" },
	{ id: "", image: "https://links.papareact.com/5w8" },
	,
	{ id: "", image: "https://links.papareact.com/7pf" },
];

const RideOptionsCard = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate("NavigateCard")}
					style={tw`absolute top-3 z-50 left-5 p-3`}
				>
					<Icon type="fontawesome" name="chevron-left" />
				</TouchableOpacity>
				<Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});

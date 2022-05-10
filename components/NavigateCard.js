import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "twrnc";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning Sami!!</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder="Where to?"
						styles={toInputBoxStyles}
						query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
						debounce={400}
						nearbyPlacesAPI="GooglePlacesSearch"
						minLength={2}
						fetchDetails={true}
						returnKeyType={"search"}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details.geometry.location,
									description: data.description,
								})
							);

							navigation.navigate("RideOptionsCard");

							//dispatch(setDestination(null));
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
	container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
	textInput: { backgroundColor: "#DDDDDF", borderRadius: 0, fontSize: 18 },
	textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});

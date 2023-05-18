import React from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { RNCamera } from "react-native-camera";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";



const Scan = ({navigation}) => {

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row', marginTop: SIZES.padding * 4,
                paddingHorizontal: SIZES.padding * 3
            }}>
                <TouchableOpacity style={{
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Image
                        source={icons.close}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.white
                        }}
                    />

                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                        Scan For Payment

                    </Text>
                </View>
                <TouchableOpacity style={{
                    height: 45,
                    width: 45,
                    backgroundColor: COLORS.green,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    onPress={() => console.log("Info")}
                >
                    <Image
                        source={icons.info}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: COLORS.white

                        }}
                    />

                </TouchableOpacity>
            </View>
        )
    }
    function renderScanFocus() {
        return (
            <View
                style={{
                    felx: 1,
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                <Image
                    source={images.focus}
                    resizeMode="stretch"
                    style={{
                        marginTop: "15%",
                        width: 230,
                        height: 330
                    }}
                />

            </View>
        )
    }
    function renderPaymentMethods() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 160,
                    padding: SIZES.padding * 3,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                    backgroundColor: COLORS.white
                }}
            >
                <Text
                    style={{ ...FONTS.h4, color: COLORS.black,  }}
                >
                    Another payment methods
                </Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding * 2
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        onPress={() => console.log("Phone Number")}
                    >
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightpurple,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10

                        }}>
                            <Image
                                source={icons.phone}
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: COLORS.purple
                                }}
                            />

                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4, color: COLORS.black }}>Phone Number</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: SIZES.padding * 2
                    }}
                        onPress={() => console.log("Barcode")}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: COLORS.lightGreen,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Image
                                source={icons.barcode}
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: COLORS.primary
                                }}
                            />

                        </View>
                        <Text style={{
                            marginLeft: SIZES.padding, ...FONTS.body4, color: COLORS.black
                        }}>Barcode</Text>

                    </TouchableOpacity>

                </View>

            </View>
        )
    }
    function onBarCodeRead(result) {
        console.log(result.data)
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
             <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
            <RNCamera
                ref={ref => {
                    this.camera = ref
                }}
                style={{ flex: 1 }}
                captureAudio={false}
                type={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={onBarCodeRead}
                androidCameraPermissionOptions={{
                    title: "Permission to use camera ",
                    message: "Camera is reguired for barcode scanning",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }}
            >
                {renderHeader()}
                {renderScanFocus()}
                {renderPaymentMethods()}

            </RNCamera>
        </View>



    );
};

export default Scan;

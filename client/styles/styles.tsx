import { Dimensions, StyleSheet } from "react-native";
import * as styleConstants from "../constants/styleConstants";

export const styles = StyleSheet.create({
  safeArea: {
    height: Dimensions.get("screen").height,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  topPosition: {
    position: 'absolute',
    top: 100,
    textAlign: 'center',
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: "row",
  },
  mainText: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 48,
    color: "#fff",
    textTransform: "uppercase",
  },
  mainTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
  },
  bottomGapView: {
    position: "absolute",
    bottom: 150,
  },
  mainImage: {
    width: 300,
    height: 400,
  },
  titleText: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 24,
    color: "#fff",
  },
  alertText: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 20,
    color: styleConstants.darkBlue,
  },
  alertSmallText: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 16,
    color: styleConstants.darkBlue,
    textAlign: 'center',
    marginTop: 5,
  },
  linkText: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 20,
    color: styleConstants.darkBlue,
    marginTop: 10
  },
  background: {
    // position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    // height: "100%",
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    backgroundColor: "#fff",
    flex: 1,
    height: 50,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
  button: {
    backgroundColor: styleConstants.blue,
    height: 50,
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

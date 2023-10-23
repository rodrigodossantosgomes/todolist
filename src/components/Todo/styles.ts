import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2F2E35',
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  button:{
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  checkContainer: {
    backgroundColor: '#5E60CE',
    padding: 4,
    borderRadius: 50,
  },
  blockName:{
    flex: 1,
    padding: 8,
    justifyContent:"center"
  },
  task:{
    marginLeft: 8,
    fontSize: 14,
    color: '#FFF',

  },
  taskDone: {
    color: "#808080",
    textDecorationLine:  'line-through',
    textDecorationStyle: 'solid',

  },

})
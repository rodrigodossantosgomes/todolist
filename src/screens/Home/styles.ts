import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 72,
    marginBottom: -30,
  },
  logo: {
  },
  form: {
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    marginRight: 12,
    fontSize: 18
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor:'#1E6F9F',
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  todosLegens: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24
  },
  todosCreated: {
    flexDirection: "row",
    alignItems: "center",
  },
  todosTextCreated: {
    color: "#4EA8DE",
    fontSize: 16,
    fontWeight: "bold",
  },
  todosCompleted: {
    flexDirection: "row",
    alignItems: "center",
  },
  todosTextCompleted: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "bold",
  },
  todosTextLegensNumber: {
    marginLeft: 2,
    borderRadius: 14,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "#333333",
    color: "#F2F2F2",
  },
  listEmpty: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  listEmptyIcon: {
    marginBottom: 12
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign:"center"
  }
})
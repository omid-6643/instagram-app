import { useFormik } from "formik";
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("required"),
      password: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="phone number, username or email"
          placeholderTextColor="#444"
        />
      </View>
      <View style={styles.inputField}>
        <TextInput placeholder="password" placeholderTextColor="#444" />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0096f6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minHeight: 42,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});

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

  const { handleChange, touched, values, handleSubmit, handleBlur, errors } = formik;

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="phone number, username or email"
          placeholderTextColor="#444"
          textContentType="emailAddress"
          autoFocus
          autoCapitalize="none"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
        />
      </View>
      {touched.email && errors.email ? (
        <Text style={{ color: "red" }}>{errors.email}</Text>
      ) : null}
      <View style={styles.inputField}>
        <TextInput
          placeholder="password"
          placeholderTextColor="#444"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
        />
      </View>
      {touched.password && errors.password ? (
        <Text style={{ color: "red" }}>{errors.password}</Text>
      ) : null}
      <Pressable style={styles.button} onPress={handleSubmit}>
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

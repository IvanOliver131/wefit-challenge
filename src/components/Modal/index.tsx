import { useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { styles, stylesDark } from "./styles";
import { setUsername } from "../../context/username";
import { setShowNavbar } from "../../context/showNavbar";
import { useSelector } from "react-redux";

const { height } = Dimensions.get("window");

export function Modal({ show, close }) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: any) => state.darkMode);

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  function handleSaveUsername({ username }) {
    dispatch(setUsername(username));
    close();
    dispatch(setShowNavbar(true));
    Keyboard.dismiss();
  }

  function handleCancel() {
    close();
    dispatch(setShowNavbar(true));
    Keyboard.dismiss();
  }

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  return (
    <Animated.View
      style={[
        darkMode ? stylesDark.container : styles.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Animated.View
        style={[
          darkMode ? stylesDark.modal : styles.modal,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        <View style={styles.indicator} />

        <Formik
          initialValues={{ username: "" }}
          onSubmit={(values) => handleSaveUsername(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              keyboardVerticalOffset={300}
            >
              <ScrollView>
                <Text style={darkMode ? stylesDark.title : styles.title}>
                  Alterar usuário selecionado
                </Text>
                <TextInput
                  label="Nome do usuário"
                  style={
                    darkMode ? stylesDark.inputUsername : styles.inputUsername
                  }
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />

                <View style={styles.buttonsFooter}>
                  <TouchableOpacity
                    style={darkMode ? stylesDark.btnCancel : styles.btnCancel}
                    onPress={handleCancel}
                  >
                    <Text
                      style={
                        darkMode
                          ? stylesDark.textBtnCancel
                          : styles.textBtnCancel
                      }
                    >
                      CANCELAR
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={darkMode ? stylesDark.btn : styles.btn}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={darkMode ? stylesDark.textBtn : styles.textBtn}
                    >
                      SALVAR
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </Animated.View>
    </Animated.View>
  );
}

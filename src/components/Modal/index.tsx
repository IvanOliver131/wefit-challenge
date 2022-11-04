import { useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { setUsername } from "../../context/username";

const { height } = Dimensions.get("window");

export function Modal({ show, close }) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  function handleSaveUsername({ username }) {
    dispatch(setUsername(username));
    close();
    Keyboard.dismiss();
  }

  function handleCancel() {
    close();
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
        styles.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.modal,
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
            <>
              <Text style={styles.title}>Alterar usuário selecionado</Text>
              <TextInput
                label="Nome do usuário"
                style={styles.inputUsername}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />

              <View style={styles.buttonsFooter}>
                <TouchableOpacity
                  style={styles.btnCancel}
                  onPress={handleCancel}
                >
                  <Text style={styles.textBtnCancel}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.textBtn}>SALVAR</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </Animated.View>
    </Animated.View>
  );
}

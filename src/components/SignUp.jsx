import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Link } from "react-router-dom";
import "../scss/signUp.scss";
import "../scss/mediaSighUp.scss";

function SignUp({
  email,
  password,
  onPassword,
  onEmail,
  onName,
  onSurname,
  name,
  surname,
  onLine,
}) {
  let [errors, setErrors] = React.useState(null);
  const passwordOneRef = React.useRef();
  const passwordTwoRef = React.useRef();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "email":
        onEmail(value);
        break;
      case "password":
        onPassword(value);
        break;
      case "surname":
        onSurname(value);
        break;
      case "name":
        onName(value);
        break;
      default:
    }
  };

  switch (errors) {
    case "The email address is already in use by another account.":
      errors =
        "Адрес электронной почты уже используется другой учетной записью.";
      break;
    default:
  }

  const createAccount = (e) => {
    e.preventDefault();
    if (passwordOneRef.current.value === passwordTwoRef.current.value) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.toString().trim(), password)
        .then((res) => {
          const user = firebase.auth().currentUser;
          alert("Вы успешно создали аккаунт");
          return user.updateProfile({
            displayName: name + " " + surname,
          });
        })
        .catch(({ message }) => setErrors(message));
    } else {
      setErrors("Введенные пароли не совпадают.");
    }
  };

  return (
    <main className="wrap">
      <div className="registration">
        <form
          action=""
          className="registration__form"
          onSubmit={("return", createAccount)}
        >
          <p className="registration__p">Регистрация пользователя</p>
          {errors === null ? null : (
            <p className="registration__error">{errors}</p>
          )}
          <label className="registration__label">Имя</label>
          <input
            type="text"
            className="registration__input"
            placeholder="Вася"
            required
            name="name"
            onChange={handleChange}
          />
          <label className="registration__label">Фамилия</label>
          <input
            type="text"
            className="registration__input"
            placeholder="Грищенко"
            required
            name="surname"
            onChange={handleChange}
          />
          <label className="registration__label">Email</label>
          <input
            type="email"
            className="registration__input"
            placeholder="faruq123@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            name="email"
            onChange={handleChange}
          />
          <label className="registration__label">
            Пароль (больше 6 символов)
          </label>
          <input
            type="password"
            className="registration__input"
            placeholder="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
            min="6"
            name="password"
            onChange={handleChange}
            ref={passwordOneRef}
          />
          <label className="registration__label">Повторите пароль</label>
          <input
            type="password"
            className="registration__input"
            placeholder="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
            min="6"
            name="password"
            onChange={handleChange}
            ref={passwordTwoRef}
          />
          <button type="submit" className="registration__submit">
            Зарегистрироваться
          </button>
          <Link
            to="/react-login/"
            className="registration__login"
            onClick={onLine}
          >
            Если у вас есть аккаунта нажмите здесь
          </Link>
        </form>
      </div>
    </main>
  );
}

export default SignUp;

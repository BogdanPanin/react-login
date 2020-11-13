import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Link } from "react-router-dom";
import "../scss/signIn.scss";
import "../scss/mediaSignIn.scss";

function SignIn({ email, password, onPassword, onEmail, onLine }) {
  let [errors, setErrors] = React.useState(null);

  const handleChange = ({ target: { value, name } }) => {
    name === "email" ? onEmail(value) : onPassword(value);
  };

  const signAccount = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email.toString().trim(), password)
      .then(() => {
        onLine(true);
      })
      .catch(({ message }) => setErrors(message));
  };

  switch (errors) {
    case "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
      errors =
        "Доступ к этой учетной записи был временно отключен. Вы можете немедленно восстановить его, сбросив пароль, или можете повторить попытку позже.";
      break;
    case "There is no user record corresponding to this identifier. The user may have been deleted.":
      errors = "Данного аккаунта не существует";
      break;
    case "The password is invalid or the user does not have a password.":
      errors = "Вы ввели не правильный пароль";
      break;
    default:
  }

  return (
    <main className="wrap">
      <div className="login">
        <form
          action=""
          className="login__form"
          onSubmit={("return", signAccount)}
        >
          <p className="login__p">Авторизация на сайте</p>
          {errors === null ? null : <p className="login__error"> {errors}</p>}
          <label className="login__label">Email</label>
          <input
            type="email"
            className="login__email"
            placeholder="faruq123@example.com"
            required
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            name="email"
          />
          <label className="login__label">Пароль</label>
          <input
            autoComplete="on"
            type="password"
            className="login__password"
            placeholder="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            onChange={handleChange}
            name="password"
          />
          <button type="submit" className="login__submit">
            Войти на сайт
          </button>
          <Link to="/react-login/" className="login__register" onClick={onLine}>
            Если у вас нету аккаунта нажмите здесь
          </Link>
        </form>
      </div>
    </main>
  );
}

export default SignIn;

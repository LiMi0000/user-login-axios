import React, { useEffect, useState, useRef } from 'react';

const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  //   useEffect(() => {
  //     userRef.current.focus();
  //   }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [user, password]);

  return (
    <div>
      <p
        // ref={errorRef}
        className={errorMessage ? 'errorMessage' : 'offscreen'}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <h1>Sign in</h1>
      <form action="">
        <label htmlFor="username" className="">
          Username:
        </label>
        <input type="text" name="" id="username" />
      </form>
    </div>
  );
};

export default Login;

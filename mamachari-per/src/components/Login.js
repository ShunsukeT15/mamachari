import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await auth.signInWithEmailAndPassword(email.value, password.value);
          history.push('/');
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      };

    return (
        <div>
          <h1>ログイン</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default Login;
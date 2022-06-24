import React, {useRef} from 'react';
import styles from './Login.module.scss'

const LoginForm = (props) => {

  const {id, password} = props;
  const loginInfo = useRef();
  const onClick = () => {
    alert(loginInfo.current);
  }


  return(
    <section className={styles.page}>
      <article className={styles.box}>
        <form>
          <ul className={styles.inputs} ref={loginInfo}>
            <li><input className={styles.input} placeholder={'ID'} value={props.id}/></li>
            <li><input className={styles.input} placeholder={'Password'} value={props.password}/></li>
          </ul>
          <button className={styles.btn} onClick={onClick}>LOGIN</button>
        </form>
      </article>
    </section>
  );
}

export default LoginForm;
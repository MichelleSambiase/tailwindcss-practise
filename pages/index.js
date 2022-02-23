import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img
            class="chat-notification-logo"
            src="/img/logo.svg"
            alt="ChitChat Logo"
          />
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

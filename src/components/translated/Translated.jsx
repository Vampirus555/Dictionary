import styles from "./Translated.module.scss";

const Translated = (props) => {
  const { word, phonetics = [], meanings = [], sourceUrls = [] } = props;

  let phoneticsFull = phonetics.filter((phonetic) => phonetic.audio !== "")[0];
  // .map((item, index) => {
  // 	if (index === 0) {
  // 		// console.log(item + "FFFF" + index)
  // 		return item
  // 	}
  // })[0]
  if (!phoneticsFull) {
    phoneticsFull = phonetics[0];
  }
  console.log(phoneticsFull);

  const playAudio = () => {
    new Audio(phoneticsFull.audio).play();
  };
  return (
    <div className={styles.translated__wrapper}>
      {/* {console.log(props)} */}

      <div className={styles.translated__info}>
        <div className={styles["translated__info-text"]}>
          <h1 className={styles.word}>{word}</h1>
          <p className={styles["phonetic-text"]}>{phoneticsFull?.text}</p>
        </div>
        {phoneticsFull && (
          <div className={styles["translated__info-audio"]} onClick={playAudio}>
            <span className={styles.audio__button}></span>
          </div>
        )}
      </div>
      <div className={styles.translated__meanings}>
        {meanings.map((item, id) => (
          <article key={id}>
            <h2>{item.partOfSpeech}</h2>
            {item.definitions.map((definition, id) => (
              <p key={id}>{definition.definition}</p>
            ))}
          </article>
        ))}
      </div>
      <div className={styles.translated__source}>{sourceUrls[0]}</div>
    </div>
  );
};

export { Translated };

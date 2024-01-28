import css from "./Options.module.css";
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { IoRefreshCircleOutline } from "react-icons/io5";

const Options = ({ showBtn, updateFoo, clearFoo }) => {
  return (
    <div className={css.options}>
      <button className={css.btn} onClick={() => {updateFoo("good")}}>
        <BsEmojiSmile size={30} />
        <p>Good</p>
      </button>
      <button className={css.btn} onClick={() => {updateFoo("neutral")}}>
        <BsEmojiNeutral size={30} />
        <p>Neutral</p>
      </button>
      <button className={css.btn} onClick={() => {updateFoo("bad")}}>
        <BsEmojiFrown size={30} />
        <p>Bad</p>
      </button>

      {showBtn ? (
        <button
          className={css.btn}
          onClick={clearFoo}
        >
          <IoRefreshCircleOutline size={30} />
        </button>
      ) : null}
    </div>
  );
};

export default Options;

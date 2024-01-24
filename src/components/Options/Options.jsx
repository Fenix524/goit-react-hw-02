import css from "./Options.module.css";
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { IoRefreshCircleOutline } from "react-icons/io5";

const Options = ({ reactionController, reactions: { good, neutral, bad } }) => {
  return (
    <div className={css.options}>
      <button className={css.btn} onClick={reactionController.updateGood}>
        <BsEmojiSmile size={30} />
        <p>Good</p>
      </button>
      <button className={css.btn} onClick={reactionController.updateNeutral}>
        <BsEmojiNeutral size={30} />
        <p>Neutral</p>
      </button>
      <button className={css.btn} onClick={reactionController.updateBad}>
        <BsEmojiFrown size={30} />
        <p>Bad</p>
      </button>

      {(good + neutral + bad) ? (
        <button
          className={css.btn}
          onClick={reactionController.clearAllReactions}
        >
          <IoRefreshCircleOutline size={30} />
        </button>
      ) : null}
    </div>
  );
};

export default Options;

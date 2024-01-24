import css from "./Options.module.css";
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { IoRefreshCircleOutline } from "react-icons/io5";

const Options = ({ reactionController }) => {
  return (
    <div className={css.options}>
      <button className={css.btn} onClick={reactionController.updateGood}>
        <BsEmojiSmile size={30}/>
        <p>Good</p>
      </button>
      <button className={css.btn} onClick={reactionController.updateNeutral}>
        <BsEmojiNeutral size={30}/>
        <p>Neutral</p>
      </button>
      <button className={css.btn} onClick={reactionController.updateBad}>
        <BsEmojiFrown size={30}/>
        <p>Bad</p>
      </button>
      <button className={css.btn} onClick={reactionController.clearAllReactions}>
        <IoRefreshCircleOutline size={30}/>
      </button>
    </div>
  );
};

export default Options;

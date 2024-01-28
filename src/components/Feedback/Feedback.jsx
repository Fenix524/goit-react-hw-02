/* eslint-disable react/prop-types */
import css from "./Feedback.module.css";

const Feedback = ({ reactions: { good, neutral, bad }, totalCount }) => {
  return (
    <table className={css.feedback}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{totalCount}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{Math.round(((totalCount - bad) / totalCount) * 100)}%</td>
        </tr>
      </tbody>
    </table>
  );
};


export default Feedback;

import css from './Description.module.css';

  const Description = ({title, subtitle}) => {
    return (
      <div className={css.description}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.subtitle}>{subtitle}</p>
      </div>
    );
  };

  export default Description;
  
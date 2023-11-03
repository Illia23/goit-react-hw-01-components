import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stats}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item} style={{backgroundColor:randomColor()}}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}</span>
                        </li>
                    );
                    
                }
                )}
            </ul>
        </section>
    )
   
}
// 2 variant

// export function Statistics(props) {

//     const elements = props.stats.map(({ id, label, percentage }) => {
//         return (
//             <li key={id} className={css.item}>
//                 <span className={css.label}>{label}</span>
//                 <span className={css.percentage}>{percentage}</span>
//             </li>
//         );
          
      
//     } 
//   );

//   return (
//     <section className={css.statistics}>
//           {props.title && <h2 className={css.title}>{props.title}</h2>}
//           <ul>
//               {elements}
//           </ul>
//     </section>
          
//   );
// }

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
};
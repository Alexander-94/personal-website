export default function Courses(props) {
  const itemStyle = `pt-1 text-xs hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Courses">
      <p className={props.captionColor}>COURSES</p>
      <hr />
      <p className={itemStyle}>
        Java Base/Advanced/Web, Educational center ITEA
      </p>
      <p className={itemStyle}>
        Red Hat Linux Essentials, Educational center ITEA
      </p>
      <div className={itemStyle}>
        <p>Oracle Database 11g: SQL Workshop,</p>
        <p>Educational center I-Klass</p>
      </div>
    </div>
  );
}

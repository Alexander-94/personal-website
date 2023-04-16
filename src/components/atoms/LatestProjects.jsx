export default function LatestProjects(props) {
  const itemStyle = `pt-1 text-sm hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="LatestProjects">
      <p className={props.captionColor}>LATEST PROJECTS</p>
      <hr />
      <p className={itemStyle}>Account maintenance service</p>
      <p className={itemStyle}>Electronic payment system</p>
      <p className={itemStyle}>Payment system migration</p>
    </div>
  );
}

export default function Expertise(props) {
  const itemStyle = `text-sm hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Expertise">
      <p className={props.captionColor}>EXPERTISE</p>
      <hr />
      <p className={`pt-1 ${itemStyle}`}>Software architecture</p>
      <p className={itemStyle}>Code refactoring</p>
      <p className={itemStyle}>Unit/Integration testing</p>
    </div>
  );
}

export default function Interests(props) {
  const itemStyle = `text-sm hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Interests">
      <p className={props.captionColor}>INTERESTS</p>
      <hr />
      <p className={`pt-1 ${itemStyle}`}>Clean code</p>
      <p className={itemStyle}>Rollerblading</p>
      <p className={itemStyle}>Front-end</p>
      <p className={itemStyle}>Latest technology</p>
    </div>
  );
}

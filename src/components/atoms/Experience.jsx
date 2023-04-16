export default function Experience(props) {
  const itemStyle = `hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Experience">
      <p className={props.captionColor}>EXPERIENCE</p>
      <hr />
      <p className={`pt-1 text-xl ${itemStyle}`}>5+ years</p>
      <p className={`pt-1 text-sm ${itemStyle}`}>Backend Development</p>
      <p className={`pt-1 text-xs ${itemStyle}`}>2018-2023</p>
    </div>
  );
}

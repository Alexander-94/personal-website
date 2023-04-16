export default function Languages(props) {
  const itemStyle = `flex pt-1 text-sm hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Languages" className="mt-5">
      <p className={props.captionColor}>LANGUAGES</p>
      <hr />
      <div className={itemStyle}>
        <div className="flex-row w-20">Ukrainian</div>
        <div className="flex-row">&#8827;native</div>
      </div>
      <div className={itemStyle}>
        <div className="flex-row w-20">Russian</div>
        <div className="flex-row">&#8827;native</div>
      </div>
      <div className={itemStyle}>
        <div className="flex-row w-20">English</div>
        <div className="flex-row">&#8827;IELTS 7.0</div>
      </div>
      <div className={itemStyle}>
        <div className="flex-row w-20">German</div>
        <div className="flex-row">&#8827;A1</div>
      </div>
    </div>
  );
}

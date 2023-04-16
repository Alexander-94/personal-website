export default function Skills(props) {
  const EmptyStub = (e) => {};
  const itemStyle = `hover:${props.hoverTextColor} transition delay-75 duration-400`;
  return (
    <div id="Skills" className="grid">
      <p className={props.captionColor}>SKILLS</p>
      <hr />
      <p className={itemStyle}>Java</p>
      <input
        type="range"
        min="0"
        max="100"
        value="95"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
      <p className={itemStyle}>Spring Boot</p>
      <input
        type="range"
        min="0"
        max="100"
        value="93"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
      <p className={itemStyle}>SQL</p>
      <input
        type="range"
        min="0"
        max="100"
        value="90"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
      <p className={itemStyle}>Git</p>
      <input
        type="range"
        min="0"
        max="100"
        value="90"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
      <p className={itemStyle}>Docker</p>
      <input
        type="range"
        min="0"
        max="100"
        value="75"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
      <p className={itemStyle}>Hibernate</p>
      <input
        type="range"
        min="0"
        max="100"
        value="73"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
      <p className={itemStyle}>Linux</p>
      <input
        type="range"
        min="0"
        max="100"
        value="68"
        className="range h-1 accent-zinc-200"
        onChange={EmptyStub}
      />
    </div>
  );
}

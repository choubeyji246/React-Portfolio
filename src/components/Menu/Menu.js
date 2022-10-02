import "./Menu.scss";

export default function Menu(props) {
  return (
    <div className={"menu "+(props.menu && "active")}>
      <ul>
        <li onClick={()=>props.setMenu(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>props.setMenu(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>props.setMenu(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>props.setMenu(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>props.setMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

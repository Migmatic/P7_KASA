function Banner(props) {

    return (
        <div class={"banner"}>
            <p class={"banner__desc"}>{props.desc}</p>
            <img class={"banner__img"} src={props.img} alt={"Paysage breton"}></img>
        </div>
    )
}

export default Banner

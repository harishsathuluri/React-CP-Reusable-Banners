// Write your code here.
const BannerCardItem = (props) => {
    const {bannerCards} = props;
    const {headerText, description, className} = bannerCards;
    return (
        <li className={`${className} banner-card-item`}>
        <h1 className="heading"> {headerText} </h1>
        <p className="description"> {description} </p>
        <button className="show-more-btn" type="button"> Show More </button>
        </li>
    )
}

export default BannerCardItem;
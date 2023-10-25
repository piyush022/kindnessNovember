import Slider from "react-slick";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderCompNews = ({
  newsSectionData,
  showLoader,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  updateNewsView,
}) => {
  let color = "red";
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div id="newsSlider">
      <Slider {...settings}>
        {newsSectionData?.length
          ? newsSectionData?.map((item, index) => (
              <>
                <div className="sliderItemNews" key={index}>
                  <article>
                    <div className="post-img">
                      <Image
                        src={
                          item?.media
                            ? process.env.SITE_URL + item?.media
                            : "news-title-two.png"
                        }
                        width={300}
                        height={300}
                        alt={item?.title}
                      />
                    </div>
                    <h2 className="News_title">
                      <Link
                        href="#!"
                        disabled={showLoader}
                        onClick={() => updateNewsView(item?.id, item?.view)}
                      >
                        {item?.title}
                      </Link>
                    </h2>
                    <p className="post-category2">
                      {item?.news_artical?.substring(0, 200) + "..."}
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <button
                          type="button"
                          disabled={showLoader}
                          onClick={() => updateNewsView(item?.id, item?.view)}
                          className="btn btn-info shar_btn"
                        >
                          Read more
                        </button>
                      </div>

                      <div className="col-md-8 align-self-center icon_wrap">
                        <span className="share_wrap icon1">
                          <i className="fa fa-eye icon1" aria-hidden="true" />
                          {item?.view ? item?.view : 0}
                        </span>

                        <a href="#!" className="buttonexpend">
                          <span className="iconexpend">
                            {" "}
                            <span className="share">
                              <i
                                className="fa fa-share-alt "
                                aria-hidden="true"
                              ></i>
                            </span>
                          </span>
                          &nbsp;&nbsp;
                          <span className="textexpend">
                            <FacebookShareButton
                              url={`${process.env.BASE_LIVE_URL}/news/${item?.id}`}
                              quote={item?.title}
                              description={item?.news_artical}
                            >
                              {" "}
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                                onClick={() =>
                                  handlefbshare(
                                    `${process.env.BASE_LIVE_URL}/news/${newsSectionFirstData?.id}`,
                                    newsSectionFirstData?.title,
                                    newsSectionFirstData?.news_artical,
                                    process.env.SITE_URL +
                                      newsSectionFirstData?.media,
                                    process.env.BASE_LIVE_URL
                                  )
                                }
                              />
                              &nbsp;
                            </FacebookShareButton>

                            <Link href="#">
                              <i
                                className="fa fa-youtube-play"
                                aria-hidden="true"
                              ></i>{" "}
                              &nbsp;
                            </Link>

                            <TwitterShareButton
                              url={`${process.env.BASE_LIVE_URL}/news/${item?.id}`}
                              title={item?.title}
                            >
                              {" "}
                              <i className="fa fa-twitter" aria-hidden="true" />
                              &nbsp;
                            </TwitterShareButton>

                            <LinkedinShareButton
                              url={`${process.env.BASE_LIVE_URL}/news/${item?.id}`}
                              title={item?.title}
                            >
                              {" "}
                              <i
                                className="fa fa-linkedin-square"
                                aria-hidden="true"
                              ></i>{" "}
                              &nbsp;
                            </LinkedinShareButton>

                            <Link href="#">
                              {/* <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i> */}
                              &nbsp;
                            </Link>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </>
            ))
          : ""}
      </Slider>
    </div>
  );
};

export default SliderCompNews;
